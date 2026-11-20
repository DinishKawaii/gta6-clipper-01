// GTA 6 Clipper entry — "Vice City Is Back" (gta6-clipper-01)
//
// This program is the whole entrypoint of the repository. Its only job is
// to hand the house the address of the YouTube Short that carries the clip:
// it copies VIDEO.json from the repository root into /output/VIDEO.json,
// where the gate reads it. The video itself is the entry — the house reads
// the views straight from YouTube — so nothing else is written here.
//
// Run it locally the same way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

// Inside the grader these two folders are /bot (the repo) and /output.
// Outside it, the two environment variables below stand in for them.
const repoRoot = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourceFile = join(repoRoot, 'VIDEO.json');
const targetFile = join(outDir, 'VIDEO.json');

if (!existsSync(sourceFile)) {
  console.error(`VIDEO.json not found in ${repoRoot} — nothing to hand in.`);
  process.exit(1);
}

// Read it once, then check both its size and its shape.
const rawText = readFileSync(sourceFile, 'utf8');

// The gate refuses a VIDEO.json bigger than 16384 bytes, so refuse it here
// first with a clear message instead of letting the gate do it silently.
const MAX_VIDEO_JSON_BYTES = 16384;
if (Buffer.byteLength(rawText, 'utf8') > MAX_VIDEO_JSON_BYTES) {
  console.error(
    `VIDEO.json is ${Buffer.byteLength(rawText, 'utf8')} bytes — over the ${MAX_VIDEO_JSON_BYTES} byte cap.`,
  );
  process.exit(1);
}

// Make sure it really is a JSON object with a url in it, so a broken file
// fails loudly here instead of being handed to the gate.
let videoEntry: unknown;
try {
  videoEntry = JSON.parse(rawText);
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof videoEntry !== 'object' ||
  videoEntry === null ||
  typeof (videoEntry as { url?: unknown }).url !== 'string' ||
  (videoEntry as { url: string }).url.length === 0
) {
  console.error('VIDEO.json must be a JSON object with a non-empty "url" string.');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(sourceFile, targetFile);
console.log(`Copied VIDEO.json to ${targetFile}`);
console.log(`Video handed in: ${(videoEntry as { url: string }).url}`);

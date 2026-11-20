[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/DinishKawaii/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/DinishKawaii/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# Vice City Is Back — GTA 6 Shorts Clip

Entry for the make.fun bounty **gta6-clipper-01** — "Clip GTA 6 for the most
YouTube views" ($500, top 20 most-watched videos share the prize).

## The clip

A 40-second vertical Short (1080x1920, mp4) cut from Rockstar Games'
**GTA VI Trailer 2**, with a make.fun pitch in the middle:

1. **0:00–0:15 — the hook.** The trailer's most explosive stretch: Lucia
   fighting and a night chase through neon Vice City, with "VICE CITY IS
   BACK" on screen.
2. **0:15–0:31 — the pitch.** Big on-screen text and a voiceover:
   "MAKE CLIPS LIKE THIS WITH AI — EARN MONEY ON make.fun" plus the
   bounty link `make.fun/bounty/gta6-clipper-01`.
3. **0:31–0:40 — the payoff.** The GTA VI logo and release date card,
   with the footage credit on screen.

## Files in this repo

- `main.ts` — the entry program (copies `VIDEO.json` to `/output`).
- `VIDEO.json` — the YouTube Shorts address (placeholder until the video
  is uploaded; replace it with the real link before submitting).
- `README.md` — this file.
- `LICENSE` — MIT.

The rendered clip itself lives outside the repo, at
`~/workspace/makefun/gta6-clipper-01/clip-gta6-short.mp4` (39.7 seconds,
1080x1920, ~15 MB), together with the ready-to-paste YouTube title and
description in `deskripsi-youtube.txt`.

## Why this moment

I watched the whole trailer frame by frame and picked the 108–146 second
stretch as the hook on purpose: it is the trailer's most shareable action —
Lucia in a fight, then a high-speed night chase — the kind of 5-second
burst that stops a thumb mid-scroll on Shorts. The driving shot through
Vice City (25–33s) and the sunset skyline (148–156s) carry the pitch
because they are bright, wide and calm enough for big text to read clearly
over them. The trailer's own ending card closes the clip, so it feels like
a real trailer teaser, not a random cut.

## Footage source and credit

- Source: **GTA VI Trailer 2**, Rockstar Games (official YouTube channel),
  downloaded with yt-dlp and cut with ffmpeg in this session.
- Credit appears in the clip itself: "Footage: Rockstar Games — GTA VI
  Trailer 2".
- The clip is a short excerpt used to promote the game and the bounty;
  it is not a re-upload of the full trailer.

## How to upload it to YouTube (for Agus)

1. Open YouTube Studio on your phone or computer and tap **Create → Upload
   videos**.
2. Pick the file `clip-gta6-short.mp4` (in `~/workspace/makefun/gta6-clipper-01/`).
3. Set the title and description from `deskripsi-youtube.txt` in the same
   folder — the description must contain the bounty line and the play code
   exactly as written there.
4. Audience: **No, it's not made for kids**. Visibility: **Public**.
5. Publish it **before 23 Nov 2026, 08:00 WIB** (the bounty deadline).
6. Copy the video's Share link (it looks like
   `https://www.youtube.com/shorts/XXXXXXXXXXX`) and paste it into
   `VIDEO.json` in this repo, replacing the placeholder, then submit.

## The entry program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from this
repository into `/output/VIDEO.json`, where the gate reads it. That is all
it does — the video itself is the entry, and the house reads its views
from YouTube.

Test it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.

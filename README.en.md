# Bilibili Focus Play Pause

Pause Bilibili videos when the browser window loses focus, and resume playback when focus returns. Useful when watching Bilibili while switching to other windows.

[中文](./README.md)

## Features

- Pauses video on window blur, tab switch, or minimize
- Resumes playback when the window is focused again
- Only resumes videos paused by this script, so manual pause is preserved
- No dependencies, no build step, no background service

## Install

1. Install a userscript manager:
   - [Tampermonkey](https://www.tampermonkey.net/)
   - [Violentmonkey](https://violentmonkey.github.io/)
2. Open the install URL:
   - [bilibili-focus-play-pause.user.js](https://raw.githubusercontent.com/mxyhi/bilibili-focus-play-pause/main/bilibili-focus-play-pause.user.js)
3. Confirm installation in the userscript manager.

## Supported Pages

- `https://www.bilibili.com/video/*`
- `https://www.bilibili.com/bangumi/play/*`
- `https://www.bilibili.com/list/*`

## Notes

- You usually need to start playback manually once after opening a page.
- Browser autoplay policies may block script-triggered resume. In that case, the script only writes a console log and does not interrupt the page.
- If Bilibili changes its page structure and the script stops working, please open an issue.

## Development

This repository contains a single userscript file. No build step is needed.

```bash
git clone https://github.com/mxyhi/bilibili-focus-play-pause.git
cd bilibili-focus-play-pause
```

After editing, reinstall `bilibili-focus-play-pause.user.js` in your userscript manager to test it.

## License

MIT

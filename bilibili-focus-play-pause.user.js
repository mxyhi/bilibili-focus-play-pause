// ==UserScript==
// @name         Bilibili 焦点播放暂停
// @name:en      Bilibili Focus Play Pause
// @namespace    https://github.com/mxyhi/bilibili-focus-play-pause
// @version      0.1.0
// @description  浏览器窗口失焦时暂停 Bilibili 视频，重新聚焦时恢复播放。
// @description:en Pause Bilibili video when the browser window loses focus, and resume it when focus returns.
// @author       mxyhi
// @license      MIT
// @match        https://www.bilibili.com/video/*
// @match        https://www.bilibili.com/bangumi/play/*
// @match        https://www.bilibili.com/list/*
// @homepageURL  https://github.com/mxyhi/bilibili-focus-play-pause
// @supportURL   https://github.com/mxyhi/bilibili-focus-play-pause/issues
// @updateURL    https://raw.githubusercontent.com/mxyhi/bilibili-focus-play-pause/main/bilibili-focus-play-pause.user.js
// @downloadURL  https://raw.githubusercontent.com/mxyhi/bilibili-focus-play-pause/main/bilibili-focus-play-pause.user.js
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(() => {
  "use strict";

  let pausedByScript = false;
  let lastVideo = null;

  // Prefer the active page video; Bilibili pages usually keep one playable video element.
  function getPlayableVideo() {
    return [...document.querySelectorAll("video")].find((video) => !video.ended) ?? null;
  }

  // Record script-owned pauses so user-created pause state is not overwritten on focus.
  function pauseForBackground(reason) {
    const video = getPlayableVideo();

    if (!video || pausedByScript || video.paused || video.ended) {
      return;
    }

    lastVideo = video;
    pausedByScript = true;
    video.pause();

    console.info("[bilibili-focus-play-pause]", "paused", reason);
  }

  // Browser autoplay policy may reject play(); logging keeps the page non-invasive.
  async function resumeForForeground(reason) {
    if (!pausedByScript) {
      return;
    }

    const video = lastVideo?.isConnected ? lastVideo : getPlayableVideo();
    pausedByScript = false;

    if (!video || video.ended) {
      return;
    }

    try {
      await video.play();
      console.info("[bilibili-focus-play-pause]", "played", reason);
    } catch (error) {
      console.info("[bilibili-focus-play-pause]", "play blocked", error);
    }
  }

  window.addEventListener("blur", () => {
    pauseForBackground("window-blur");
  });

  window.addEventListener("focus", () => {
    if (!document.hidden) {
      void resumeForForeground("window-focus");
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      pauseForBackground("document-hidden");
      return;
    }

    void resumeForForeground("document-visible");
  });
})();

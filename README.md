# Bilibili 焦点播放暂停

浏览器窗口失焦时自动暂停 Bilibili 视频，重新聚焦时恢复播放。适合边看 Bilibili 边切到其他窗口处理事情的场景。

[English](./README.en.md)

## 特性

- 窗口失焦、切换标签页、最小化时暂停视频
- 窗口重新聚焦时恢复播放
- 只恢复被脚本暂停的视频，不打断手动暂停状态
- 无依赖、无构建步骤、无后台服务

## 安装

1. 安装 userscript 管理器：
   - [Tampermonkey](https://www.tampermonkey.net/)
   - [Violentmonkey](https://violentmonkey.github.io/)
2. 打开脚本安装地址：
   - [bilibili-focus-play-pause.user.js](https://raw.githubusercontent.com/mxyhi/bilibili-focus-play-pause/main/bilibili-focus-play-pause.user.js)
3. 在管理器中确认安装。

## 支持页面

- `https://www.bilibili.com/video/*`
- `https://www.bilibili.com/bangumi/play/*`
- `https://www.bilibili.com/list/*`

## 注意事项

- 第一次进入页面时，通常需要先手动点击播放一次。
- 浏览器自动播放策略可能拒绝脚本恢复播放；这时脚本只会在控制台写入日志，不会弹窗打扰页面。
- 如果 Bilibili 页面结构变化导致脚本失效，请提交 issue。

## 开发

这个仓库只有一个 userscript 文件，无需构建。

```bash
git clone https://github.com/mxyhi/bilibili-focus-play-pause.git
cd bilibili-focus-play-pause
```

改动后把 `bilibili-focus-play-pause.user.js` 重新安装到 userscript 管理器即可测试。

## License

MIT

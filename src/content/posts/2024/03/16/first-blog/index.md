---
title: 一個部落格的誕生，為什麼開始寫部落格？
published: 2024-03-16
description: '我為什麼寫部落格？又用了哪些資源？'
image: ''
tags: [Astro, Hexo, GitHub Pages, GitHub Actions]
category: ''
draft: false 
---

## 為什麼開始寫部落格
在寫 JS 地下城的挑戰時，要提交寫好的內容，其中一項是撰寫技術文章，雖然是選填的內容，為了提交完整還是決定寫部落格，完美主義使然，就是這麼簡單的理由。雖然課程推薦使用 [medium](https://medium.com/) 撰寫文章，但想要有自己喜歡的部落格樣式，因此開始研究怎麼建立個人化部落格。

## 寫部落格的好處
雖然是為了提交挑戰而開始撰寫部落格，但寫部落格還是有好處的：
1. 紀錄學到的技術，方便之後忘記時能快速回憶。
2. 在撰寫的過程中，也加深自己對於技術的用法。

## 使用資源
一開始參考六角學院卡斯伯老師錄製的影片[使用 Hexo 建構個人化部落格](https://www.youtube.com/watch?v=jOJI9ekTzK8)，使用 Hexo 建立好了部落格，並找到喜歡的 theme - [vivia](https://github.com/saicaca/hexo-theme-vivia) 套用。在改 theme 的過程中，發現 logo 太難改了，又看到此 theme 的作者有出了 [Astro 版本](https://github.com/saicaca/fuwari)，內容好改很多，加上 [Astro](https://astro.build/) 支援 transition 轉場效果，看起來虛華很多。因此一入坑 Hexo 就馬上跳坑 Astro 了。

## 建立部落格遇到的問題及解決方法
在建立部落格時，直接使用 theme 作者所寫的 [How to Use](https://github.com/saicaca/fuwari?tab=readme-ov-file#-how-to-use) 照著步驟操作就可以在本機執行了。

將 theme 客製成自己的 blog 後，部署到 `Github Pages`，為了部署方便，使用了 `GitHub Actions`。第一次使用 `GitHub Actions`，想說按照 Astro 官網所提供的 [Configure a GitHub Action](https://docs.astro.build/en/guides/deploy/github/#configure-a-github-action) 就能成功部署了吧！？

沒想到在部署的過程中頻頻發生錯誤，看了一下錯誤都是 `node.js`, `pnpm` 版本的問題。
> ![deploy error](https://firebasestorage.googleapis.com/v0/b/clara-blog.appspot.com/o/1_deploy_error.png?alt=media&token=6eaa2969-56fe-4d32-8189-aad2af4ba0ff "deploy error")

照著錯誤指示升級了版本，又發生了新的錯誤，但照著這個錯誤提示 `Process completed with exit code 1.` google 根本找不到解法。
> ![exit code](https://firebasestorage.googleapis.com/v0/b/clara-blog.appspot.com/o/1_exit_code_1.png?alt=media&token=0d797e33-34af-4a83-8f2f-fda0e8e81967 "exit code")

在問了六角的同學後，才知道原來錯誤發生在 build 展開後細節的 333 行，`Could not find Sharp. Please install Sharp...`
> ![exit code](https://firebasestorage.googleapis.com/v0/b/clara-blog.appspot.com/o/1_sharp_install.png?alt=media&token=64e199b6-ecd8-41ba-bd3f-a8cc17e229cf "exit code")


使用關鍵字 google，找到 Astro 官網的 [Could not find Sharp.](https://docs.astro.build/en/reference/errors/missing-sharp/)，照著操作之後，終於能順利使用 Github Actions 部署到 Github Pages 了，可喜可賀 🎉

## 總結
之前就很想建立部落格，但覺得要建立個人化部落格好像很難。感謝有六角大神同學 - 上竣的協助，覺得可以試試看。

在過程中遇到了一些問題，也都逐步解決了，建立成功後覺得自己達成了一項待辦清單，很有成就感。這是我的第一篇部落格，~~希望不會是最後一篇~~，感謝觀看到這裡的你 / 妳。
# glow.in.shadow GitHub Pages Setup

這個資料夾可以直接放到 GitHub Pages。

## 你現在有什麼

- `index.html`：品牌首頁
- `resources/index.html`：免費資源入口，讓讀者選「現在最像自己的狀態」
- `resources/guide.html?type=internal`：內耗模式互動練習
- `resources/guide.html?type=sos`：情緒急救互動練習
- `resources/guide.html?type=hsp`：高敏感互動練習
- `resources/guide.html?type=love`：關係模式互動練習

## Funnel 用法

IG / Linktree / ManyChat
→ GitHub Pages `resources/`
→ 讀者完成 3 題自我覺察
→ 點「領取完整 PDF」
→ MailerLite landing page 收 email
→ MailerLite automation 寄 PDF / follow-up email

## 要替換的連結

如果 MailerLite 正式 publish 後 URL 改了，改這個檔案：

`resources/script.js`

找到：

- `https://glow-in-shadow-o1lkrn.subscribepage.io`
- `https://glow-sos.subscribepage.io`
- `https://glow-hsp.subscribepage.io`
- `https://glow-love.subscribepage.io`

替換成正式連結。

## GitHub Pages 基本部署

1. 建立一個新的 GitHub repository
2. 把 `brand-site` 裡面的所有檔案上傳到 repository root
3. 到 repository 的 `Settings`
4. 打開 `Pages`
5. Source 選 `Deploy from a branch`
6. Branch 選 `main`，folder 選 `/root`
7. Save

完成後網址通常會像：

`https://你的github名稱.github.io/你的repository名稱/`

免費資源入口會是：

`https://你的github名稱.github.io/你的repository名稱/resources/`

## ManyChat 設定方向

Post 留言關鍵字
→ Instagram DM 自動回覆
→ 問 email
→ 儲存 email / 同步 MailerLite
→ 發 GitHub Pages 的 `resources/` 或單一 `guide.html?type=...` 連結

如果暫時不用 ManyChat：

Linktree 直接放 `resources/` 也可以。

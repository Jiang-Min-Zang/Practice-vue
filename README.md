```txt
src/
├── api/ # 放置所有 axios 請求，按功能分模組 (如 user.ts, product.ts)
├── assets/ # 靜態資源：CSS 變數、圖片、字體、全域樣式
├── components/ # 「共用」的小零件 (Button, Card, Input)
├── hooks/ # 放置抽離出來的邏輯 (useMouse, useDebounce, useAuth)
├── layout/ # 頁面的大外殼 (側邊欄 + 導航欄的組合檔)
├── router/ # 路由配置 (index.ts)
├── store/ # Pinia 倉庫 (按功能分，如 userStore.ts)
├── types/ # 你的 interface 和 type 定義檔 (PersonInter 等)
├── utils/ # 工具函式 (時間格式化、防抖、localStorage 處理)
└── pages/ # 這裡放「頁面」等級的大作品 (如 HomeView.vue, LoginView.vue)

Frontend Mentor
src/
├── components/ # 「共用零件」
│ ├── BaseButton.vue
│ ├── BaseCard.vue
│ └── AppHeader.vue
├── pages/ # 放各個「獨立練習作品」
│ ├── FM-ProductCard/ # Frontend Mentor 題目 A
│ └── FM-Newsletter/ # Frontend Mentor 題目 B
├── assets/ # 圖片與 CSS
└── router/ # 路由：負責切換顯示哪一個 Page
```

## 📁 資料夾規範

- **src/pages/**: 存放獨立的作品頁面。每個作品都是一個完整的路由組件。
- **src/components/**: 存放跨作品共用的 UI 組件（如自定義按鈕、彈窗）。
- **src/assets/**: 依照專案編號存放圖片資源 (e.g., assets/p01/...)。
- **src/types/**: 存放所有 TypeScript 介面定義。

## 🛠️ 開發流程

1. 在 `src/pages/` 建立新的作品資料夾。
2. 在 `src/router/` 註冊新的路由。
3. 優先考慮使用 `src/components/` 裡的共用組件以保持樣式統一。

## 🛠️ 開發日記(備忘錄)

## 0513

完成了登入頁 可以判斷有沒有符合db.json的資料
但是邏輯寫到共用組件去了 未來要弄一個hooks把邏輯拆出去

## 0514

完成首頁 登入邏輯可以轉導到首頁 有把帳號資料顯示出來 還有刪除按鈕

## 0519

hook -->拆出login邏輯、簡單的後臺管理系統
完成編輯按鈕、刪除按鈕新增再確認提示窗

## 0522

嘗試Prop到子層，使用SweetAlert2替換原生

## 0525

1. 新增api資料夾，新增預設ts檔，後續將登入跟管理流程補上
2. 開始第一份切版網頁-購物車(Product list with cart)

## 購物車(Product list with cart)

1. 成功取得圖片資料 db-json路徑 ，圖片放在public資料夾
2. 進度規劃
   (1.db.json資料放到api資料夾的product.ts 並且父層能夠導入2.寫一個共用組件card，index.vue prop資料進來(web,mobile,平板,縮圖)
   3.index.vue 寫出三種RWD狀態4.寫一個購物車彈窗組件5.開始寫JS邏輯)
3. 已大致完成(5/25~6/5) 使用到的功能(Prop、Emit，Array的find、reduce、findIndex)
4. 比較不懂的部分是emit

## 後台管理練習 0614

1. 2023年尚硅谷後台教學影片過於久遠，很多設定都過舊
2. 改成看影片有的項目，問AI練習

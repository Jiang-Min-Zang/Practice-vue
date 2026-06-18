import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VuesetupExtnd from "vite-plugin-vue-setup-extend";
import path from "path";
// 🟢 1. 引入現代化圖標與自動引入外掛
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VuesetupExtnd(),
    Components({
      resolvers: [
        IconsResolver({
          prefix: "i", // 這樣我們待會就能用 <i-圖標庫-圖標名> 的網頁標準寫法
        }),
      ],
    }),
    // 🟢 3. 配置圖標編譯：自動去抓 @iconify/json 裡面你有用到的 SVG，按需打包
    Icons({
      autoInstall: true, // 自動下載需要的圖標庫
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src"), // 相对路径别名配置，使用 @ 代替 src
    },
  },
});

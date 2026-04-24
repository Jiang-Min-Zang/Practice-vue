import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// import test from "./project/test.vue";  取一個名字放到createAPP裡+上題目的主檔案路徑
// 引入pinia
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// createApp(App).mount("#app");
//引入路由器
import router from "./router";
//創建一個應用
const app = createApp(App);
//創建pinia
const pinia = createPinia();
//安裝pinia
app.use(pinia);
//使用路由器
app.use(router);
//掛載整個應用到app容器中
app.mount("#app");

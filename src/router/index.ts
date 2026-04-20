//引入createRouter
import { createRouter, createWebHashHistory } from "vue-router";
//引入可能要呈現的組件
import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import About from "../pages/About.vue";
//創建路由
const router = createRouter({
  history: createWebHashHistory(), //路由工作模式(未來說明)
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/news",
      component: News,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});
//暴露router
export default router;

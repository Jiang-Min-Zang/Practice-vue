//引入createRouter
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
//引入可能要呈現的組件
import Home from "../pages/Home.vue";
import News from "../pages/News/News.vue";
import About from "../pages/About.vue";
import newsDetail from "../pages/News/newsDetail.vue";
import Products from "../pages/Products/index.vue";
import ProdustsList from "../pages/Products/List.vue";
import Employee from "../pages/EmployeeList/index.vue";
import EmployeeDetail from "../pages/EmployeeList/EmployeeDetail.vue";

//創建路由
const router = createRouter({
  history: createWebHistory(), //路由工作模式(未來說明)
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/news",
      component: News,
      children: [
        {
          name: "detail",
          path: "detail/:id/:title/:content?",
          // path: "detail",
          component: newsDetail,
          props: true,
          // props(route) {
          //   return route.query;
          // },
        },
      ],
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/Products",
      component: Products,
      children: [
        {
          name: "ProductsList",
          path: "list/:id/:name/:price?",
          component: ProdustsList,
          props: true,
          // props(route) {
          //   return route.query;
          // },
        },
      ],
    },
    {
      path: "/Employee",
      component: Employee,
      children: [
        {
          name: "Employeedetail",
          path: "Employeedetail",
          component: EmployeeDetail,
          props(route) {
            return route.query;
          },
        },
      ],
    },
    {
      path: "/",
      redirect: "/home", //當訪問，直接轉去首頁
    },
  ],
});
//暴露router
export default router;

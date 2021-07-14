import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
//constantRoutes： 代表那些不需要动态判断权限的路由，如登录页、404、等通用页面。
//asyncRoutes： 代表那些需求动态判断权限并通过 addRoutes 动态添加的页面
const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/login/Login.vue"),
  },
  {
    path: "/home",
    name: "",
    component: () => import("../views/home/Home.vue"),
    children: [
      //因为在生成路由时，主路由上的path会自动添加到子路由之前，所以把path路劲设置为空
      {
        path: "",
        name: "Index",
        component: () => import("../views/index/Index.vue"),
      },
      {
        path: "/home/list",
        name: "List",
        component: () => import("../views/list/List.vue"),
      }
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

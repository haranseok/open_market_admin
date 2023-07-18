import { createRouter, createWebHistory } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";
import TheSlideNav from "@/components/TheSlideNav.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/main",
    },
    {
      path: "/goods/main",
      redirect: "/main",
    },
    {
      path: "/main",
      components: {
        TheHeader,
        TheSlideNav,
        default: import("@/pages/Main.vue"),
      },
    },
    {
      path: "/goods",
      redirect: "/goods/list",
      components: {
        TheHeader,
        TheSlideNav,
        default: import("@/pages/goods/GoodsLayout.vue"),
      },
      children: [
        {
          path: "list",
          component: import("@/pages/goods/GoodsList.vue"),
        },
        {
          path: "inventory",
          component: import("@/pages/goods/Inventory.vue"),
        },
      ],
    },
  ],
});

export default router;

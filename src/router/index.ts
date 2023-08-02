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
      path: "/main",
      components: {
        TheHeader,
        TheSlideNav,
        default: import("@/pages/Main.vue"),
      },
    },
    {
      path: "/goods",
      components: {
        TheHeader,
        TheSlideNav,
        default: import("@/pages/goods/GoodsLayout.vue"),
      },
    },
    {
      path: "/orders",
      components: {
        TheHeader,
        TheSlideNav,
        default: import("@/pages/orders/OrderLayout.vue"),
      },
    },
    {
      path: "/members",
      components: {
        TheHeader,
        TheSlideNav,
        default: import("@/pages/members/MembersLayout.vue"),
      },
    },
  ],
});

export default router;

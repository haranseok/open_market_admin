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
      path: "/product",
      components: {
        TheHeader,
        TheSlideNav,
        default: import("@/pages/ProductLayout.vue"),
      },
    },
  ],
});

export default router;

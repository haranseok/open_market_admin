import { createRouter, createWebHistory } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";
import TheSlideNav from "@/components/TheSlideNav.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      components: {
        TheHeader,
        TheSlideNav,
        default: import("@/pages/home.vue"),
      },
    },
  ],
});

export default router;

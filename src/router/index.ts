import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

export default router;

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("access_token");
  if (to.name !== "Login" && token === null) {
    if (to.meta.requireAuth) {
      //alert('로그인 후 이용해주세요.');
      next("/login");
    } else {
      next();
    }
  } else {
    return next();
  }
});

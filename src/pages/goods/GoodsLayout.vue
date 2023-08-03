<template>
  <v-main class="bg">
    <TheBreadCrumbs :title="'상품관리'" :items="links" />
    <article class="inner-container">
      <router-view></router-view>
    </article>
  </v-main>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import TheBreadCrumbs from "@/components/TheBreadCrumbs.vue";

const route = useRoute();
const links = ref([
  {
    title: "home",
    disabled: false,
    href: "main",
  },
  {
    title: "상품리스트",
    disabled: true,
    href: "/goods/list",
  },
]);

watchEffect(
  (route.path,
  () => {
    if (route.path === "/goods/create") {
      links.value[1].disabled = false;
      links.value.push({
        title: "상품등록",
        disabled: true,
        href: "/goods/create",
      });
    } else if (route.path === "/goods/list") {
      links.value[1].disabled = true;
      if (links.value.length > 2) {
        links.value.pop();
      }
    }
  })
);
</script>

<style lang="scss" scoped>
.inner-container {
  padding: 1.5% 0;
}
</style>

<template>
  <v-app-bar color="#F5F5F5">
    <v-app-bar-nav-icon
      @click="navDrawer.setRail((navDrawer.rail = !navDrawer.rail))"
    ></v-app-bar-nav-icon>
    <Search class="search-bar" />
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useNavDrawerStore } from "@/stores/NavDrawerStore.ts";
import Search from "@/components/item/Search.vue";
const navDrawer = useNavDrawerStore();
</script>

<style lang="scss" scoped>
.search-bar {
  position: absolute;
  right: 2%;
}
</style>

<template>
  <v-app-bar color="#F5F5F5">
    <v-app-bar-nav-icon
      @click="navDrawer.rail = !navDrawer.rail"
    ></v-app-bar-nav-icon>
    <Search class="search-bar" />
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useNavDrawerStore } from "@/stores/NavDrawerStore";
import Search from "@/components/items/Search.vue";
const navDrawer = useNavDrawerStore();
</script>

<style lang="scss" scoped>
.search-bar {
  position: absolute;
  right: 2%;
}
</style>

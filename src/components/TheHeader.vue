<template>
  <v-app-bar color="#F5F5F5">
    <v-app-bar-nav-icon
      @click="navDrawer.setRail((navDrawer.rail = !navDrawer.rail))"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>Application</v-toolbar-title>
    <button class="logout-btn">
      <v-icon>mdi-logout</v-icon>
      <small>logout</small>
    </button>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useNavDrawerStore } from "@/stores/NavDrawerStore.ts";

const navDrawer = useNavDrawerStore();
</script>

<style lang="scss" scoped>
.logout-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2%;
  text-transform: uppercase;
}
</style>

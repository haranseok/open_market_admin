<template>
  <v-app-bar>
    <v-app-bar-nav-icon
      @click="navDrawer.setDrawer((navDrawer.drawer = !navDrawer.drawer))"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useNavDrawerStore } from "@/stores/NavDrawerStore.ts";

const navDrawer = useNavDrawerStore();
</script>

<style lang="scss" scoped></style>

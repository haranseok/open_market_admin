<template>
  <v-navigation-drawer v-model="navDrawerStore.drawer">
    <!--  -->
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useNavDrawerStore } from "@/stores/NavDrawerStore";
const navDrawerStore = useNavDrawerStore();
</script>

<style lang="scss" scoped></style>

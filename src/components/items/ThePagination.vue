<template>
  <v-pagination
    v-model="paging.page"
    :length="paging.pageView"
    :total-visible="5"
    @click="pageUpdate"
  ></v-pagination>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";

const paging = ref({
  page: 1,
  pageView: 0,
});

const emits = defineEmits(["pageUpdate"]);
const props = defineProps(["paging"]);
const pageUpdate = () => {
  emits("pageUpdate", paging.value);
};
watchEffect(
  (props.paging,
  () => {
    paging.value.pageView = props.paging.pageView;
  })
);
</script>

<style lang="scss" scoped></style>

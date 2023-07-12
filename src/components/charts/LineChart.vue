<template>
  <div>
    <Line :data="props.data" :options="options" :height="100" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Line } from "vue-chartjs";
import "@/plugins/GlobalChart";

const options = ref({
  plugins: {
    legend: {},
  },
});

const props = defineProps(["data"]);
</script>

<style lang="scss" scoped></style>

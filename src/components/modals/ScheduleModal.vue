<template>
  <div v-if="props.isOpen">
    <div class="modal-bg"></div>
    <v-card>
      <input type="date" v-model="setDate" />
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { watchEffect, ref } from "vue";

const props = defineProps(["date", "isOpen"]);
const setDate = ref("");
const dateFormat = (value: string) => {
  let replace = value.replace(/(\s*)/g, "");
  let splits = replace.split(".");
  if (splits.length > 1) {
    if (splits[1].length === 1 && splits[2].length === 1) {
      setDate.value = `${splits[0]}-0${splits[1]}-0${splits[2]}`;
    } else {
      setDate.value = `${splits[0]}-0${splits[1]}-${splits[2]}`;
    }
  }
};

watchEffect(
  (props.date,
  () => {
    dateFormat(props.date);
  })
);
</script>

<style lang="scss" scoped>
// .modal-bg {
//   width: 100%;
//   height: 100vh;
//   position: fixed;
//   top: 0;
//   left: 0;
//   background: rgba(0, 0, 0, 0.5);
//   z-index: 1007;
// }
</style>

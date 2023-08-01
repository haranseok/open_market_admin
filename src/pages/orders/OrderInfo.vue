<template>
  <div>
    <dialog v-if="isShowModal"></dialog>
  </div>
</template>

<script lang="ts" setup>
export interface Modal {
  isShowModal: boolean;
}

const { isShowModal } = defineProps<Modal>();
</script>

<style lang="scss" scoped>
dialog {
  border: 2px solid rgb(80, 140, 230);
  border-radius: 5px;
}

dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.2);
  /* backdrop의 필터 속성은 filter가 아닌 backdrop-filter를 사용해야한다. */
  backdrop-filter: blur(1px);
}
</style>

<template>
  <div class="input-layout jcsb">
    <input type="text" placeholder="주문번호 검색" />
    <v-btn icon="mdi-magnify" size="x-small" color="#283593"></v-btn>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.input-layout {
  width: 250px;
  background: #fff;
  padding: 5px 10px;
  font-size: 0.8rem;
  border-radius: 20px;
  box-shadow: inset 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  input {
    &::placeholder {
      font-size: 0.8rem;
    }
  }
  .v-icon {
    margin-top: 5px;
  }
}
</style>

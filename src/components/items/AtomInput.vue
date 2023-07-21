<template>
  <div class="input-wrap">
    <input
      :type="type"
      :placeholder="placeholder"
      @input="onInput"
      :data-placeholder="dataPlaceholder"
      required
    />
  </div>
</template>

<script lang="ts" setup>
interface Input {
  type: string;
  placeholder?: string;
  dataPlaceholder?: string;
}

const { type, placeholder, dataPlaceholder } = defineProps<Input>();
const emit = defineEmits(["changeInput"]);

const onInput = (e: any) => {
  emit("changeInput", e.target.value);
};
</script>

<style lang="scss" scoped>
.input-wrap {
  width: 200px;
  margin: 5px 10px;
  input {
    width: 200px;
    padding: 5px;
    border: 2px solid #eee;
    border-radius: 5px;
    transition: 0.3s;
    background: #fff;
    &:focus {
      transition: 0.3s;
      border: 2px solid #00065791;
    }
    &::placeholder {
      color: #aaa;
    }
  }
  input[type="date"] {
    position: relative;
    &::before {
      content: attr(data-placeholder);
      width: 100%;
      font-size: 0.85rem;
      color: #aaa;
    }
    &:focus::before,
    &:valid::before {
      display: none;
    }
    &::after {
      content: "";
    }
    &::-webkit-calendar-picker-indicator {
      position: absolute;
      right: 5px;
      top: 8px;
      padding-left: 3000px;
      height: 100%;
    }
  }
}
</style>

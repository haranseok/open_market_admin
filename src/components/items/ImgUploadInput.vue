<template>
  <div class="img-container">
    <div class="img-wrap">
      <img :src="src" :alt="alt" v-if="imgShow" />
      <label for="imgUpload" class="cp" v-if="labelShow">
        <v-icon>mdi-plus-circle-outline</v-icon>
        <small>{{ labelText }}</small>
      </label>
      <input
        type="file"
        id="imgUpload"
        accept="image/*"
        @change="imgFileUpload"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
export interface FileUpload {
  src: any;
  alt: string;
  labelText: string;
  imgShow: boolean;
  labelShow: boolean;
}

const { src, alt, labelText, imgShow, labelShow } = defineProps<FileUpload>();
const emits = defineEmits<{
  (e: "imaFileUpload", value: any): void;
}>();

const imgFileUpload = (e: any) => {
  emits("imaFileUpload", e);
};
</script>

<style lang="scss" scoped>
.img-wrap {
  width: 25%;
  max-width: 200px;
  img {
    width: 100%;
    max-width: 200px;
  }
  label {
    height: 200px;
    display: block;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px dashed #aaa;
    position: relative;
    .v-icon {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2rem;
      margin-bottom: 5px;
    }
    small {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: rgb(211, 74, 11);
      font-weight: bold;
    }
  }
  input[type="file"] {
    display: none;
  }
}
</style>

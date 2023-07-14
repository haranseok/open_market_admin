<template>
  <div class="container">
    <h4>총 &lpar; 2건 &rpar;</h4>
    <v-card>
      <Table :th="th" :tr="tr" />
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Table from "@/components/tables/DefualtTable.vue";

const th = ref([
  "상품 id",
  "store",
  "대표 이미지",
  "판매자 명",
  "상품 명",
  "상태",
  "가격",
  "배송비",
  "옵션",
  "이미지 관리",
  "등록일자",
  "수정",
  "삭제",
]);

const tr = ref([
  [
    "123450s",
    "a",
    "img",
    "홍길동",
    "작품",
    "노출",
    "30,000원",
    "3,000원",
    "1",
    "관리",
    "2023-07-14",
    "mdi-pencil-circle",
    "mdi-delete-circle",
  ],
]);
</script>

<style lang="scss" scoped>
.container {
  margin: 2% 0;
  h4 {
    margin-bottom: 10px;
    text-align: right;
    color: #7c7c7c;
  }
}
</style>

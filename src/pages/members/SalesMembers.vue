<template>
  <div class="base-table">
    <BaseTable :headers="th" :list="items">
      <template #list="{ row }">
        <td>{{ row.id }}</td>
        <td>{{ row.store }}</td>
        <td>{{ row.number }}</td>
        <td>{{ row.address }}</td>
        <td>{{ row.category }}</td>
        <td>{{ row.name }}</td>
        <td>{{ row.phone }}</td>
        <td>{{ row.createDate }}</td>
      </template>
    </BaseTable>
    <v-btn class="delete-btn" @click="doDelete" color="error">일괄삭제</v-btn>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import BaseTable from "@/components/tables/BaseTable.vue";
import { useButtonStore } from "@/stores/ButtonStore";

const button = useButtonStore();

const doDelete = () => {
  button.setButtonClick();
  console.log(button.setButtonClick());
};
const th = ref([
  "전체선택",
  "id",
  "쇼핑몰",
  "사업자번호",
  "사업자 주소",
  "업종",
  "판매자명",
  "연락처",
  "등록일자",
  "수정",
  "삭제",
]);

const items = ref([
  {
    id: "admin",
    store: "a Store",
    number: "000-00-00000",
    address: "서울시 강남구 00동 ",
    category: "도매 및 소매업/ㅇㅇ",
    name: "홍길동",
    phone: "010-0000-0000",
    createDate: "2023-07-21",
  },
]);
</script>

<style lang="scss" scoped></style>
@/stores/ButtonSrore @/stores/ButtonStore

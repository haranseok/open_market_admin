<template>
  <div class="base-table">
    <BaseTable
      :headers="th"
      :list="items"
      :btn-text="'일괄 삭제'"
      @btn-event="doDelete"
    >
      <template #list="{ row }">
        <td>{{ row.id }}</td>
        <td>{{ row.name }}</td>
        <td>{{ row.phone }}</td>
        <td>
          <select v-model="row.status">
            <option :value="1">회원</option>
            <option :value="2">휴면계정</option>
            <option :value="3">탈퇴</option>
          </select>
        </td>
        <td>{{ row.createDate }}</td>
      </template>
    </BaseTable>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import BaseTable from "@/components/tables/BaseTable.vue";
const seleted = ref("");
const th = ref([
  "전체선택",
  "id",
  "회원 명",
  "연락처",
  "상태",
  "등록일자",
  "수정",
  "삭제",
]);

const items = ref([
  {
    id: "test",
    name: "홍길동",
    phone: "010-1111-1111",
    status: 1,
    createDate: "2023-07-17",
  },
  {
    id: "aaa123",
    name: "홍길동2",
    phone: "010-1111-1111",
    status: 1,
    createDate: "2023-07-17",
  },
  {
    id: "bbb123",
    name: "홍길동3",
    phone: "010-1111-1111",
    status: 2,
    createDate: "2023-07-17",
  },
]);
const doDelete = (e: any) => {
  console.log(e);
};
</script>

<style lang="scss" scoped></style>

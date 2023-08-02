<template>
  <div class="base-table">
    <BaseTable :headers="th" :list="items">
      <template #list="{ row }">
        <td>{{ row.id }}</td>
        <td>{{ row.name }}</td>
        <td class="select-wrap">
          <div class="select-box flex cp">
            <select v-model="row.status" class="cp">
              <option :value="1">슈퍼관리자</option>
              <option :value="2">일반관리자</option>
              <option :value="3">개발자</option>
            </select>
            <v-icon>mdi-menu-down</v-icon>
          </div>
        </td>
        <td style="width: 150px">{{ row.createDate }}</td>
      </template>
    </BaseTable>
    <v-btn class="delete-btn" @click="doDelete" color="error">일괄삭제</v-btn>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import BaseTable from "@/components/tables/BaseTable.vue";
import { useButtonStore } from "@/stores/ButtonSrote";

const button = useButtonStore();

const doDelete = () => {
  button.setButtonClick();
  console.log(button.setButtonClick());
};

const th = ref([
  "전체선택",
  "id",
  "회원 명",
  "권한",
  "등록일자",
  "수정",
  "삭제",
]);

const items = ref([
  {
    id: "test",
    name: "홍길동",
    status: 1,
    createDate: "2023-07-17",
  },
  {
    id: "aaa123",
    name: "홍길동2",
    status: 1,
    createDate: "2023-07-17",
  },
  {
    id: "bbb123",
    name: "홍길동3",
    status: 2,
    createDate: "2023-07-17",
  },
]);
</script>

<style lang="scss" scoped>
.select-wrap {
  width: 100px;
  text-align: center;
}
.select-box {
  position: relative;
  width: 150px;
  margin-left: 2px;
  align-items: center;
  padding: 0;
  background: rgb(236, 236, 236);
  border-radius: 3px;
  select {
    width: 100%;
    padding: 5px;
    z-index: 2;
  }
  .v-icon {
    position: absolute;
    right: 0;
    z-index: 1;
  }
}
</style>

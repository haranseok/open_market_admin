<template>
  <div class="container">
    <h4>총 &lpar; {{ items.length }} 건 &rpar;</h4>
    <section class="base-table">
      <BaseTable
        :headers="th"
        :list="items"
        :btn-text="'일괄 삭제'"
        @btn-event="doDelete"
      >
        <template #list="{ row }">
          <td>{{ row.id }}</td>
          <td>{{ row.store }}</td>
          <td>
            <img
              src="@/assets/images/exclude.png"
              alt=""
              v-if="row.img === ''"
            />
            <img :src="row.img" alt="" v-else />
          </td>
          <td>{{ row.name }}</td>
          <td>{{ row.goodsName }}</td>
          <td>{{ row.status }}</td>
          <td>{{ row.supplyPrice }}</td>
          <td>{{ row.salePrice }}</td>
          <td>{{ row.discountPrice }}</td>
          <td>{{ row.option }}</td>
          <td>{{ row.imgStatus }}</td>
          <td>{{ row.createDate }}</td>
        </template>
      </BaseTable>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import BaseTable from "@/components/tables/BaseTable.vue";
const th = ref([
  "전체선택",
  "상품 id",
  "store",
  "대표 이미지",
  "판매자 명",
  "상품 명",
  "상태",
  "공급가",
  "판매가",
  "할인가",
  "옵션",
  "이미지 관리",
  "등록일자",
  "수정",
  "삭제",
]);

const items = ref([
  {
    id: "a12345",
    store: "aStore",
    img: "",
    name: "홍길동",
    goodsName: "a 상품",
    status: "1",
    supplyPrice: "5,000원",
    salePrice: "10,000원",
    discountPrice: "8,000원",
    option: "1",
    imgStatus: "2",
    createDate: "2023-07-17",
  },
  {
    id: "a1234567",
    store: "bStore",
    img: "",
    name: "춘향",
    goodsName: "b 상품",
    status: "1",
    supplyPrice: "5,000원",
    salePrice: "10,000원",
    discountPrice: "",
    option: "1",
    imgStatus: "0",
    createDate: "2023-07-17",
  },
  {
    id: "c1234567",
    store: "cStore",
    img: "",
    name: "아무개",
    goodsName: "c 상품",
    status: "1",
    supplyPrice: "8,000원",
    salePrice: "12,000원",
    discountPrice: "",
    option: "1",
    imgStatus: "0",
    createDate: "2023-07-17",
  },
]);

const doDelete = (e: any) => {
  console.log(e);
};

const doCreate = () => {};
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

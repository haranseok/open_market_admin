<template>
  <div class="container">
    <v-card class="base-table">
      <BaseTable :headers="th" :list="items" class="table">
        <template #list="{ row }">
          <td>{{ row.goodsName }}</td>
          <td>
            <img
              src="@/assets/images/exclude.png"
              alt=""
              v-if="row.img === ''"
            />
            <img :src="row.img" alt="" v-else />
          </td>
          <td class="num">{{ row.storage }}</td>
          <td class="num">{{ row.oders }}</td>
          <td class="oders"><input type="text" /></td>
          <td class="checkbox"><input type="checkbox" /></td>
        </template>
      </BaseTable>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import BaseTable from "@/components/tables/BaseTable.vue";

const th = ref([
  "전체선택",
  "상품 명",
  "상품 이미지",
  "창고재고",
  "주문대기",
  "재고수정",
  "판매 여부",
  "수정",
  "삭제",
]);

const items = ref([
  {
    goodsName: "a 상품",
    img: "",
    oders: 0,
    storage: 200,
  },
  {
    goodsName: "a 상품",
    img: "",
    oders: 0,
    storage: 200,
  },
  {
    goodsName: "a 상품",
    img: "",
    oders: 0,
    storage: 200,
  },
]);
</script>

<style lang="scss" scoped>
.container {
  margin: 2% 0;
  .base-table {
    .oders {
      width: 100px;
      input {
        width: 55%;
        padding: 2px 5px;
        border: 1px solid #d6d6d6;
        background: #eee;
      }
    }
    .num {
      width: 120px;
    }
    .checkbox {
      width: 100px;
    }
  }
}
</style>

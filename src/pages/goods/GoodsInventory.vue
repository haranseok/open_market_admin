<template>
  <v-main class="bg">
    <TheBreadCrumbs :title="'재고관리'" :items="links" />
    <article class="inner-container">
      <section class="base-table">
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
      </section>
      <v-btn class="delete-btn" @click="doDelete" color="error">일괄삭제</v-btn>
    </article>
  </v-main>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useButtonStore } from "@/stores/ButtonStore";
import BaseTable from "@/components/tables/BaseTable.vue";
import TheBreadCrumbs from "@/components/TheBreadCrumbs.vue";

const button = useButtonStore();
const links = ref([
  {
    title: "home",
    disabled: false,
    href: "main",
  },
  {
    title: "상품리스트",
    disabled: true,
    href: "/goods?list",
  },
]);

const doDelete = () => {
  button.setButtonClick();
  console.log(button.setButtonClick());
};

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
    goodsName: "b 상품",
    img: "",
    oders: 0,
    storage: 200,
  },
  {
    goodsName: "c 상품",
    img: "",
    oders: 0,
    storage: 200,
  },
]);

const doUpdate = (e: any) => {
  console.log(e);
};
</script>

<style lang="scss" scoped>
.inner-container {
  padding: 1.5% 0;
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

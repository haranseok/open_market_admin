<template>
  <v-main class="bg">
    <TheBreadCrumbs :title="title" :items="items" />
    <article class="inner-container">
      <div class="search-wrap jcsb">
        <div class="inner flex">
          <CommonInput
            :type="'text'"
            :placeholder="'상품명'"
            @changeInput="getName"
          />
          <CommonInput
            :type="'text'"
            :placeholder="'상품코드'"
            @changeInput="getCode"
          />
          <CommonInput
            :type="'date'"
            :dataPlaceholder="'시작날짜 YYYY-MM-DD'"
            @changeInput="getStartDate"
          />
          <CommonInput
            :type="'date'"
            :dataPlaceholder="'종료날짜 YYYY-MM-DD'"
            @changeInput="getEndDate"
          />
        </div>
        <v-btn color="rgb(40, 53, 147)" @click="doSearch">검색</v-btn>
      </div>
    </article>
  </v-main>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import TheBreadCrumbs from "@/components/TheBreadCrumbs.vue";
import CommonInput from "@/components/items/CommonInput.vue";
const text = ref("");
const title = ref("상품관리");
const productName = ref("");
const productCode = ref("");
const startData = ref("");
const endData = ref("");
const items = ref([
  {
    title: "home",
    disabled: false,
    href: "main",
  },
  {
    title: "상품리스트",
    disabled: true,
    href: "product",
  },
]);
const getName = (e: string) => {
  productName.value = e;
};
const getCode = (e: string) => {
  productCode.value = e;
};
const getStartDate = (e: string) => {
  startData.value = e;
};
const getEndDate = (e: string) => {
  endData.value = e;
};
const doSearch = () => {
  let searchData = {
    name: productName.value,
    code: productCode.value,
    start: startData.value,
    end: endData.value,
  };

  console.log(searchData);
};
</script>

<style lang="scss" scoped>
.inner-container {
  padding: 1.5% 0;
}

.search-wrap {
  align-items: center;
  padding: 0.5%;
  border-radius: 5px;
  background: rgba(244, 246, 247, 0.699);
  box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.1);
  .inner {
    align-items: center;
  }
  .v-btn {
    width: 90px;
    margin-right: 10px;
    color: #e7e7e7;
  }
}
</style>

<template>
  <v-main class="bg">
    <TheBreadCrumbs :title="'상품관리'" :items="links" />
    <article class="inner-container">
      <div class="search-wrap jcsb" v-if="isSearch">
        <div class="inner flex">
          <AtomInput
            :type="'text'"
            :placeholder="'상품명'"
            @changeInput="getName"
          />
          <AtomInput
            :type="'text'"
            :placeholder="'상품코드'"
            @changeInput="getCode"
          />
          <AtomInput
            :type="'date'"
            :dataPlaceholder="'시작날짜 YYYY-MM-DD'"
            @changeInput="getStartDate"
          />
          <AtomInput
            :type="'date'"
            :dataPlaceholder="'종료날짜 YYYY-MM-DD'"
            @changeInput="getEndDate"
          />
        </div>
        <v-btn color="rgb(40, 53, 147)" @click="doSearch">검색</v-btn>
      </div>
      <section>
        <component :is="goodsPage"></component>
      </section>
    </article>
  </v-main>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import TheBreadCrumbs from "@/components/TheBreadCrumbs.vue";
import AtomInput from "@/components/items/AtomInput.vue";
import GoodsList from "./GoodsList.vue";
import GoodsInventory from "./GoodsInventory.vue";
import GoodsUpdate from "./GoodsUpdate.vue";
const route = useRoute();
const goodsPage = ref(GoodsList);
const isSearch = ref(true);
const goodsName = ref("");
const goodsCode = ref("");
const startData = ref("");
const endData = ref("");
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
const getName = (e: string) => {
  goodsName.value = e;
};
const getCode = (e: string) => {
  goodsCode.value = e;
};
const getStartDate = (e: string) => {
  startData.value = e;
};
const getEndDate = (e: string) => {
  endData.value = e;
};
const doSearch = () => {
  let searchData = {
    name: goodsName.value,
    code: goodsCode.value,
    start: startData.value,
    end: endData.value,
  };
};

const doGoodsCreate = () => {};
const linksTypes = (title: string, href: string, component: any) => {
  links.value[1] = {
    title: title,
    disabled: true,
    href: `/goods?type=${href}`,
  };
  goodsPage.value = component;
};

watchEffect(
  (route.query,
  () => {
    let type = route.query.type;
    if (type === "list") {
      linksTypes("상품 리스트", "list", GoodsList);
    } else if (type === "inventory") {
      linksTypes("상품 재고관리", "inventory", GoodsInventory);
    } else {
      linksTypes("상품 등록", "update", GoodsUpdate);
      isSearch.value = false;
    }
  })
);
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

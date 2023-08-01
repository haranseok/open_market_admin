<template>
  <v-main class="bg">
    <TheBreadCrumbs :title="'주문관리'" :items="links" />
    <ul class="tab-wrapper flex">
      <li
        v-for="(list, i) in tabName"
        :key="i"
        class="cp flex"
        @click="tabClick(i)"
        :class="currentTab === i ? 'active' : ''"
      >
        <p class="tab-name">{{ list.name }}</p>
        <p class="count">{{ list.count }}</p>
      </li>
    </ul>
    <div class="table-container"></div>
  </v-main>
</template>

<script lang="ts" setup>
import TheBreadCrumbs from "@/components/TheBreadCrumbs.vue";
import { ref } from "vue";

const links = ref([
  {
    title: "home",
    disabled: false,
    href: "main",
  },
  {
    title: "주문관리",
    disabled: true,
    href: "/members?general",
  },
]);

let tabName = ref([
  { name: "신규주문", count: 5 },
  { name: "입금대기", count: 1 },
  { name: "결제완료", count: 5 },
  { name: "배송준비중", count: 0 },
  { name: "배송중", count: 2 },
  { name: "배송완료", count: 5 },
]);

const currentTab = ref(0);
const th = ref([
  "전체선택",
  "주문자 id",
  "상품명",
  "주문자명",
  "수령자인",
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

const tabClick = (e: number) => {
  currentTab.value = e;
};
</script>

<style lang="scss" scoped>
.tab-wrapper {
  justify-content: flex-start;
  text-align: center;
  border-bottom: 1px solid #dadada;
  margin: 0 2.5%;
  li {
    padding: 1%;
    font-size: 0.9rem;
    p {
      margin: 0 2px;
    }
    .count {
      font-weight: bold;
      color: rgb(123, 136, 236);
    }
  }
  .active {
    color: rgb(123, 136, 236);
    border-bottom: 3px solid rgb(123, 136, 236);
  }
}

.base-table {
  padding: 2.5%;
}
</style>

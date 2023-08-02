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
    <div class="base-table">
      <BaseTable
        :headers="th"
        :list="items"
        :btn-text="'일괄 삭제'"
        @btn-event="doDelete"
      >
        <template #list="{ row }">
          <td style="width: 200px">
            <a href="#"
              ><p @click="geOrderData(row)">{{ row.orderNum }}</p></a
            >
          </td>
          <td>{{ row.goodsName }}</td>
          <td>{{ row.amount }}</td>
          <td>{{ row.price }}</td>
          <td>{{ row.orderName }}</td>
          <td>{{ row.recipient }}</td>
          <td style="width: 150px">{{ row.orderStatus }}</td>
          <td style="width: 200px">
            {{ DateHelpers.getDateTime(row.orderDate) }}
          </td>
        </template>
      </BaseTable>
    </div>
  </v-main>
  <OrderInfo :isShowModal="isOrderInfo" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { DateHelpers } from "@/helpers/DateHelper";
import TheBreadCrumbs from "@/components/TheBreadCrumbs.vue";
import BaseTable from "@/components/tables/BaseTable.vue";
import OrderInfo from "@/pages/orders/OrderInfo.vue";
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

const isOrderInfo = ref(false);

const tabName = ref([
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
  "주문번호",
  "상품명",
  "수량",
  "상품금액",
  "주문자",
  "수령인",
  "주문상태",
  "주문일자",
  "수정",
  "삭제",
]);

const items = ref([
  {
    orderNum: 12345678,
    goodsName: "굿즈",
    amount: 1,
    price: 15000,
    orderName: "홍길동",
    recipient: "춘향",
    orderStatus: "무통장입금대기",
    orderDate: "1690879396",
  },
  {
    orderNum: 456789102513,
    goodsName: "굿즈1",
    amount: 2,
    price: 18000,
    orderName: "둘리",
    recipient: "둘리",
    orderStatus: "결제완료",
    orderDate: "1690879396",
  },
  {
    orderNum: 1234567258,
    goodsName: "굿즈3",
    amount: 3,
    price: 25000,
    orderName: "아무개",
    recipient: "아무개",
    orderStatus: "결제완료",
    orderDate: "1690879396",
  },
]);

const tabClick = (e: number) => {
  currentTab.value = e;
};

const geOrderData = () => {
  isOrderInfo.value = true;
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

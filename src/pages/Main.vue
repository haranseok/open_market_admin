<template>
  <v-main class="bg">
    <TheBreadCrumbs :title="title" :items="items" />
    <div class="inner-container">
      <p>주문 상태별 주문 수</p>
      <v-card row="12">
        <LineChart :data="data" />
      </v-card>
      <v-card class="table-wrap">
        <v-col cols="3">
          <CardTable
            :tableTitle="'주문 처리'"
            :headers="table_order.th"
            :items="table_order.td"
          />
        </v-col>
        <v-col cols="3">
          <CardTable
            :tableTitle="'반품 관리'"
            :headers="tableReturn.th"
            :items="tableReturn.td"
          />
        </v-col>
        <v-col cols="3">
          <CardTable
            :tableTitle="'환불 관리'"
            :headers="tableRefund.th"
            :items="tableRefund.td"
          />
        </v-col>
        <v-col cols="3">
          <CardTable
            :tableTitle="'교환 관리'"
            :headers="tableExchange.th"
            :items="tableExchange.td"
          />
        </v-col>
      </v-card>
      <div class="schedule flex">
        <v-col cols="4">
          <v-card>d</v-card>
        </v-col>
        <v-col cols="8">
          <v-card><Calendar /></v-card>
        </v-col>
      </div>
    </div>
  </v-main>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import TheBreadCrumbs from "@/components/TheBreadCrumbs.vue";
import LineChart from "@/components/charts/LineChart.vue";
import CardTable from "@/components/tables/CardTable.vue";
import Calendar from "@/components/items/Calendar.vue";
const title = ref("메인화면");
const items = ref([
  {
    title: "main",
    disabled: true,
    href: "main",
  },
]);
const data = ref({
  labels: [
    "주문접수",
    "결제완료",
    "상품준비",
    "상품발송",
    "배송완료",
    "구매확정",
    "취소관리",
    "반품관리",
    "환불관리",
    "교환관리",
  ],
  datasets: [
    {
      label: "주문 상태별",
      data: [40, 20, 12, 5, 30, 15, 21, 2, 8, 35],
      borderColor: "#4527A0",
      backgroundColor: "#4527A0",
      pointHitRadius: 50,
    },
  ],
});

const table_order = ref({
  th: [
    "주문접수",
    "결재완료",
    "배송준비",
    "배송진행",
    "배송완료",
    "구매확정",
    "상품취소",
    "정산완료",
  ],
  td: [0, 0, 0, 0, 0, 0, 0, 0],
});

const tableReturn = ref({
  th: ["반품접수", "반품진행", "처리완료"],
  td: [0, 0, 0],
});
const tableRefund = ref({
  th: ["환불접수", "환불진행", "처리완료"],
  td: [0, 0, 0],
});
const tableExchange = ref({
  th: ["교환접수", "교환진행", "처리완료"],
  td: [0, 0, 0],
});
</script>

<style lang="scss" scoped>
.inner-container {
  padding: 1.5% 0;
  p {
    font-weight: bold;
  }
  .v-card {
    margin: 20px 0;
    padding: 10px;
  }
  .table-wrap {
    display: flex;
  }
}
</style>

<template>
  <div class="container">
    <h4>총 &lpar; {{ items.length }} 건 &rpar;</h4>
    <section class="base-table">
      <BaseTable :headers="th" :list="items">
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
          <td>{{ DateHelpers.getDate(row.created_at) }}</td>
        </template>
      </BaseTable>
      <v-btn class="delete-btn" @click="doDelete" color="error">일괄삭제</v-btn>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import BaseTable from "@/components/tables/BaseTable.vue";
import { DateHelpers } from "@/helpers/DateHelper";
import { useButtonStore } from "@/stores/ButtonStore";
import { GoodsService } from "@/services/GoodsService";
const button = useButtonStore();

const doDelete = () => {
  button.setButtonClick();
  console.log(button.setButtonClick());
};

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

const items = ref({});

const getList = async (pageNum: string, itemCount: string) => {
  let res = await GoodsService.getGoodsList(pageNum, itemCount);
  let list: any = [];
  res.list.forEach((e: any) => {
    list.push({
      id: e.id,
      store: e.mall_info.mall_name,
      img: e.image,
      name: "",
      goodsName: e.name,
      status: e.status === "1" ? "노출" : "비노출",
      supplyPrice: "",
      salePrice: e.max_sale_price,
      discountPrice: e.sale_price,
      option: e.option_list.list.name,
      imgStatus: "",
      created_at: e.created_at,
    });
  });
  items.value = list;
};

getList("1", "5");
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

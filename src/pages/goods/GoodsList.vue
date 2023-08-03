<template>
  <div class="container">
    <h4>총 &lpar; {{ items.length }} 건 &rpar;</h4>
    <section class="base-table">
      <BaseTable :headers="th" :list="items" @doDeleteOne="doDeleteOne">
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
      <Pagination :paging="paging" @pageUpdate="pageUpdate" />
    </section>
    <div class="btn-box">
      <v-btn class="create-btn" @click="doCreate">상품등록</v-btn>
      <v-btn class="delete-btn" @click="doDeleteMulti" color="error"
        >일괄삭제</v-btn
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { DateHelpers } from "@/helpers/DateHelper";
import { useButtonStore } from "@/stores/ButtonStore";
import { GoodsService } from "@/services/GoodsService";
import BaseTable from "@/components/tables/BaseTable.vue";
import Pagination from "@/components/items/ThePagination.vue";

const router = useRouter();
const buttonStore = useButtonStore();
const limit = ref<number>(2);
const page = ref<number>(1);
const paging = ref<object>({});
onMounted(() => {
  getList(page.value, limit.value);
});

const doDeleteMulti = () => {
  buttonStore.list;
  console.log(buttonStore.list);
};
const doDeleteOne = (e: object) => {
  console.log(e);
};
const doCreate = () => {
  router.push("/goods/create");
};

const th = ref([
  "전체선택",
  "상품 id",
  "store",
  "대표 이미지",
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

const items = ref([]);

const getList = async (pageNum: number, itemCount: number) => {
  let res = await GoodsService.getGoodsList(pageNum, itemCount);
  let pageSize = Math.ceil(res.count / limit.value);
  paging.value = { pageView: pageSize };
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
      option: e.option_list.list[0].name,
      imgStatus: "",
      created_at: e.created_at,
    });
  });
  items.value = list;
};

const pageUpdate = (paging: any) => {
  page.value = paging.page;
  items.value = [];
  getList(page.value, limit.value);
};
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

.btn-box {
  display: flex;
  justify-content: end;
  .create-btn {
    margin: 3% 15px;
  }
}
</style>

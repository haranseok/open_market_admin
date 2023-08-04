<template>
  <div class="container">
    <div class="search-wrap jcsb">
      <div class="inner flex">
        <AtomInput
          :type="'text'"
          :placeholder="'상품명'"
          @changeInput="getName"
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
    <h4>총 &lpar; {{ totalData }} 건 &rpar;</h4>
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
    </section>
    <Pagination :paging="paging" @pageUpdate="pageUpdate" />
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
import { Calculator } from "@/assets/common/Calculator.ts";
import BaseTable from "@/components/tables/BaseTable.vue";
import Pagination from "@/components/items/ThePagination.vue";
import AtomInput from "@/components/items/AtomInput.vue";

const router = useRouter();
const buttonStore = useButtonStore();

const items = ref([]);
const totalData = ref<number>(0);
const limit = ref<any>("10");
const page = ref<number>(1);
const paging = ref<object>({});
const goodsName = ref("");
const startData = ref("");
const endData = ref("");

onMounted(() => {
  getList(page.value, limit.value);
});

const doDeleteMulti = () => {
  buttonStore.list;
  console.log(buttonStore.list);
};
const doDeleteOne = async (e: any) => {
  let res = await GoodsService.doDeleteOne(e.id);
  if (res.code === 200) {
    items.value = [];
    getList(page.value, limit.value);
  }
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

const getList = async (pageNum: number, itemCount: string) => {
  let res = await GoodsService.getGoodsList(pageNum, itemCount);
  totalData.value = res.count;
  setPaging(res.count);
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
      salePrice: Calculator.setPriceComma(e.max_sale_price),
      discountPrice: e.sale_price,
      option: e.option_list.list[0].name,
      imgStatus: "",
      created_at: e.created_at,
    });
  });
  items.value = list;
};

const setPaging = (count: number) => {
  let pageSize = Math.ceil(count / limit.value);
  paging.value = { pageView: pageSize };
};

const pageUpdate = (paging: any) => {
  page.value = paging.page;
  items.value = [];
  getList(page.value, limit.value);
};

const getName = (e: string) => {
  goodsName.value = e;
};
const getStartDate = (e: string) => {
  startData.value = e;
};
const getEndDate = (e: string) => {
  endData.value = e;
};

const doSearch = () => {
  getList(page.value, `${limit.value}&name=${goodsName.value}`);
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

.base-table {
  margin-bottom: 2%;
}

.btn-box {
  display: flex;
  justify-content: end;
  .create-btn {
    margin: 3% 15px;
  }
}

.search-wrap {
  align-items: center;
  margin-bottom: 2.5%;
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

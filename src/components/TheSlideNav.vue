<template>
  <v-navigation-drawer
    :rail="navDrawerStore.rail"
    permanent
    color="#283593"
    theme="dark"
    width="270"
  >
    <v-list-item
      prepend-avatar="@/assets/logo/st_logo.png"
      nav
      class="img-item"
    >
      <h2>secret town</h2>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home-city"
        title="메인화면"
        value="home"
        @click="router.push('/main')"
      ></v-list-item>
      <v-list-group value="goods">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="상품관리"
            prepend-icon="mdi-gift"
          ></v-list-item>
        </template>
        <v-list-item
          v-for="([title, value, link], i) in goods"
          :key="i"
          :title="title"
          :value="value"
          @click="routerLink(link)"
        >
        </v-list-item>
      </v-list-group>
      <v-list-item
        title="주문관리"
        prepend-icon="mdi-cart"
        value="order"
        @click="router.push('/orders')"
      ></v-list-item>

      <!-- <v-list-group value="order">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="주문관리"
            prepend-icon="mdi-cart"
          ></v-list-item>
        </template>
        <v-list-item
          v-for="([title, value], i) in orders"
          :key="i"
          :title="title"
          :value="value"
        >
        </v-list-item>
      </v-list-group> -->
      <v-list-group value="users">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="회원관리"
            prepend-icon="mdi-account-group-outline"
          ></v-list-item>
        </template>
        <v-list-item
          v-for="([title, value, link], i) in users"
          :key="i"
          :title="title"
          :value="value"
          @click="routerLink(link)"
        >
        </v-list-item>
      </v-list-group>
      <v-list-item
        prepend-icon="mdi-domain"
        title="공급 업체관리"
        value="supply"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-truck-delivery"
        title="배송 기사 관리"
        value="delivery"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-developer-board"
        title="게시판 관리"
        value="board"
      ></v-list-item>
      <v-list-group value="statistics">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="통계 관리"
            prepend-icon="mdi-chart-bar"
          ></v-list-item>
        </template>
        <v-list-item title="매출통계" value="sales"></v-list-item>
      </v-list-group>
      <v-list-group value="operate">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="운영 관리"
            prepend-icon="mdi-account-wrench-outline"
          ></v-list-item>
        </template>
        <v-list-item
          v-for="([title, value], i) in operate"
          :key="i"
          :title="title"
          :value="value"
        >
        </v-list-item>
      </v-list-group>
      <v-list-group value="service">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="서비스 설정"
            prepend-icon="mdi-face-agent"
          ></v-list-item>
        </template>
        <v-list-item
          v-for="([title, value], i) in service"
          :key="i"
          :title="title"
          :value="value"
        >
        </v-list-item>
      </v-list-group>
      <v-list-group value="preferences">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-cog"
            title="환경 설정"
          ></v-list-item>
        </template>
        <v-list-item
          v-for="([title, value], i) in preferences"
          :key="i"
          :title="title"
          :value="value"
        ></v-list-item>
      </v-list-group>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block>
          <v-icon v-if="navDrawerStore.rail === true">mdi-export</v-icon>
          <p v-else>logout</p>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useNavDrawerStore } from "@/stores/NavDrawerStore";
const router = useRouter();
const navDrawerStore = useNavDrawerStore();
const goods = ref([
  ["상품 등록", "goods_update", "goods?type=update"],
  ["상품 조회", "goods_list", "goods?type=list"],
  ["상품 재고관리", "inventory", "goods?type=inventory"],
]);
const orders = ref([
  ["주문접수", "order_receipt"],
  ["결제대기", "payment"],
]);
const users = ref([
  ["일반 회원", "general_user", "members?type=general"],
  ["판매자 회원", "seller_user", "members?type=sales"],
  ["관리자 회원", "admin_user", "members?type=admin"],
]);
const operate = ref([
  ["이벤트 관리", "event"],
  ["배너 관리", "banner"],
  ["이용약관 관리", "terms"],
  ["개인정보처리방침", "privarcy"],
]);
const service = ref([
  ["카테고리(게시판) 관리", "category-board"],
  ["카테고리(상품) 관리", "category-goods"],
  ["적립금 설정", "reserves"],
  ["오픈마켓 리스트", "market-list"],
  ["무통장 계좌설정", "account-setup"],
  ["제품 창고 관리", "storage"],
]);
const preferences = ref([
  ["메뉴 설정", "menu"],
  ["기본 설정", "default"],
]);

const routerLink = (link: string) => {
  router.push(link);
};
</script>

<style lang="scss" scoped>
h2 {
  text-transform: capitalize;
}
.img-item {
  height: 63px;
}
</style>

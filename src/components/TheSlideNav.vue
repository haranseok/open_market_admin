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
      ></v-list-item>
      <v-list-group value="product">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="상품관리"
            prepend-icon="mdi-gift"
          ></v-list-item>
        </template>
        <v-list-item title="상품리스트" value="product-list"></v-list-item>
        <v-list-item title="상품 재고관리" value="inventory"></v-list-item>
      </v-list-group>
      <v-list-group value="order">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="주문관리"
            prepend-icon="mdi-cart"
          ></v-list-item>
        </template>
        <v-list-item title="주문접수" value="order-receipt"></v-list-item>
        <v-list-item title="결제대기" value="payment"></v-list-item>
      </v-list-group>
      <v-list-item
        prepend-icon="mdi-account-group-outline"
        title="회원관리"
        value="users"
      ></v-list-item>
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
        <v-list-item title="이벤트 관리" value="event"></v-list-item>
        <v-list-item title="배너 관리" value="banner"></v-list-item>
        <v-list-item title="이용약관 관리" value="terms"></v-list-item>
        <v-list-item title="개인정보처리방침" value="privacy"></v-list-item>
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
          title="카테고리(게시판) 관리"
          value="category-board"
        ></v-list-item>
        <v-list-item
          title="카테고리(상품) 설정"
          value="category-product"
        ></v-list-item>
        <v-list-item title="적립금 설정" value="reserves"></v-list-item>
        <v-list-item title="오픈마켓 리스트" value="privacy"></v-list-item>
        <v-list-item title="무통장 계좌설정" value="market-list"></v-list-item>
        <v-list-item title="제품 창고관리" value="storage"></v-list-item>
      </v-list-group>
      <v-list-item
        prepend-icon="mdi-cog"
        title="환경 설정"
        value="preferences"
      ></v-list-item>
      <v-list-group value="preferences">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-cog"
            title="환경 설정"
          ></v-list-item>
        </template>
        <v-list-item title="메뉴 설정" value="menu"></v-list-item>
        <v-list-item title="기본 설정" value="defualt"></v-list-item>
        <v-list-item title="관리자 회원" value="admin-user"></v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useNavDrawerStore } from "@/stores/NavDrawerStore";
const navDrawerStore = useNavDrawerStore();
</script>

<style lang="scss" scoped>
h2 {
  text-transform: capitalize;
}
.img-item {
  height: 63px;
}
</style>

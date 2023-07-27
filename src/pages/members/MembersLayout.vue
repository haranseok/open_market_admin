<template>
  <v-main class="bg">
    <TheBreadCrumbs :title="'회원관리'" :items="links" />
    <article class="inner-container">
      <v-row>
        <v-col cols="4" v-for="(count, i) in membersCount" :key="i">
          <v-card>
            <div class="top jcsb">
              <div class="text-box">
                <p class="text-button">{{ count.title }}</p>
                <h2 :style="i === 2 ? 'color:#B71C1C' : ''">
                  {{ count.total }}
                </h2>
              </div>
              <div class="icon-box jcc">
                <v-icon>mdi-{{ count.icon }}</v-icon>
              </div>
            </div>
            <p class="text-overline increase">
              전 월 대비 <strong>{{ count.increase }}</strong
              >증가
            </p>
          </v-card>
        </v-col>
      </v-row>
      <section>
        <component :is="membersPage"></component>
      </section>
    </article>
  </v-main>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import TheBreadCrumbs from "@/components/TheBreadCrumbs.vue";
import GeneralMembers from "@/pages/members/GeneralMembers.vue";
import SalesMembers from "@/pages/members/SalesMembers.vue";
import AdminMembers from "@/pages/members/AdminMembers.vue";

const route = useRoute();
const membersPage = ref(GeneralMembers);
const links = ref([
  {
    title: "home",
    disabled: false,
    href: "main",
  },
  {
    title: "일반회원",
    disabled: true,
    href: "/members?general",
  },
]);

const membersCount = ref([
  {
    icon: "account",
    title: "일반 회원 수",
    total: 200,
    increase: 30,
  },
  {
    icon: "storefront-outline",
    title: "판매 회원 수",
    total: 150,
    increase: 5,
  },
  {
    icon: "account-group",
    title: "총 회원 수",
    total: 350,
    increase: 35,
  },
]);

const linksTypes = (title: string, href: string, component: any) => {
  links.value[1] = {
    title: title,
    disabled: true,
    href: `/members?type=${href}`,
  };
  membersPage.value = component;
};

watchEffect(
  (route.query,
  () => {
    let type = route.query.type;

    if (type === "general") {
      linksTypes("일반회원", "general", GeneralMembers);
    } else if (type === "sales") {
      linksTypes("판매회원", "sales", SalesMembers);
    } else {
      linksTypes("관리자 회원", "admin", AdminMembers);
    }
  })
);
</script>

<style lang="scss" scoped>
.inner-container {
  padding: 1.5% 0;
}

.v-row {
  margin-bottom: 20px;
}

.v-card {
  padding: 10px;
  border-left: 5px solid #0252ad;
  .top {
    align-items: center;
    h2 {
      color: #3154a0;
    }
    .icon-box {
      width: 50px;
      height: 50px;
      margin-right: 10px;
      background: rgba(54, 54, 192, 0.37);
      border-radius: 50%;
      color: rgb(243, 243, 243);
    }
    p {
      font-weight: bold;
    }
  }

  .increase {
    margin-top: 1.5%;
    strong {
      font-size: 1.3rem;
      color: rgb(185, 0, 0);
    }
  }
}
</style>

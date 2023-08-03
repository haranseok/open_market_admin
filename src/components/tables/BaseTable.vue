<template>
  <div class="table-container">
    <v-card>
      <table>
        <thead>
          <tr>
            <th v-for="(th, i) in headers" :key="i">
              <div v-if="i === 0">
                <input type="checkbox" id="all" v-model="allSelected" />
                <label for="all" style="display: none">전체선택</label>
              </div>
              <div v-else>{{ th }}</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(row, i) in list" :key="i">
            <tr>
              <td class="small">
                <input type="checkbox" v-model="checkedList" :value="row" />
              </td>
              <slot name="list" :row="row"></slot>
              <td class="small">
                <v-btn icon="mdi-pencil-circle" variant="text"></v-btn>
              </td>
              <td class="small">
                <v-btn icon="mdi-delete-circle" variant="text"></v-btn>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </v-card>
    <Pagination :paging="paging" @pageUpdate="pageUpdate" />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted, watchEffect } from "vue";
import Pagination from "@/components/items/ThePagination.vue";
import { useButtonStore } from "@/stores/ButtonStore";

export interface Tables {
  headers: any;
  list: any;
}

const button = useButtonStore();

const { headers, list } = defineProps<Tables>();

const paging = ref({});

const getList = () => {
  let pageSize = 10;
  paging.value = { pageView: pageSize };
};

const pageUpdate = (page: object) => {
  console.log(page);
};

let checkedList = ref([]);
const allSelected = computed({
  get: () => {
    return list.length === checkedList.value.length;
  },
  set: (e) => {
    checkedList.value = e ? list : [];
  },
});

watchEffect(
  (checkedList.value,
  () => {
    button.list = checkedList.value;
  })
);

onMounted(() => {
  getList();
});
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border: 1px solid #dbdbdb;
  font-size: 0.8rem;
  color: #666;
  thead {
    background: rgba(244, 246, 247, 0.699);
    th {
      padding: 5px;
      border: 1px solid #dbdbdb;
      text-transform: uppercase;
    }
  }
  .small {
    width: 50px;
  }
}
</style>

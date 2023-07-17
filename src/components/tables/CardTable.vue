<template>
  <table>
    <thead>
      <tr>
        <th colspan="2">{{ tableTitle }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(tr, i) in headers" :key="i">
        <td>{{ tr }}</td>
        <td>{{ items[i] }} 건</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
interface CardTable {
  tableTitle: string;
  headers: any;
  items: any;
}

const { tableTitle, headers, items } = defineProps<CardTable>();
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border: 1px solid #eee;
  font-size: 0.8rem;
  thead {
    text-align: center;
    background: #f5f5f5;
    tr {
      th {
        font-weight: bold;
        padding: 2%;
      }
    }
  }
  tbody {
    tr {
      td {
        width: 50%;
        padding: 5px;
        border: 1px solid #eee;
        &:nth-child(2) {
          text-align: right;
        }
      }
    }
  }
}
</style>

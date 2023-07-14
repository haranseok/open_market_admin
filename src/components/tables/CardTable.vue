<template>
  <table>
    <thead>
      <tr>
        <th colspan="2">{{ props.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(tr, i) in props.th" :key="i">
        <td>{{ tr }}</td>
        <td>{{ props.td[i] }} 건</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
const props = defineProps(["title", "th", "td"]);
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

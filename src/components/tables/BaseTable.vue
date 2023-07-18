<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th v-for="(th, i) in headers" :key="i">
            {{ th }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(row, i) in list" :key="i">
          <tr>
            <slot name="list" :row="row"></slot>
            <td><v-btn icon="mdi-pencil-circle" variant="text"></v-btn></td>
            <td><v-btn icon="mdi-delete-circle" variant="text"></v-btn></td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
export interface Tables {
  headers: any;
  list: any;
}
const { headers, list } = defineProps<Tables>();
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
  tbody {
    td {
      padding: 5px;
      text-align: center;
      border: 1px solid #dbdbdb;
      &:nth-child(11),
      &:nth-child(12) {
        width: 50px;
      }
    }
  }
}
</style>

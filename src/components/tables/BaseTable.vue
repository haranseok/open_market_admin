<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th v-for="(th, i) in headers" :key="i">
            <div v-if="i === 0"><input type="checkbox" /></div>
            <div v-else>{{ th }}</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(row, i) in list" :key="i">
          <tr>
            <td class="small"><input type="checkbox" /></td>
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
  .small {
    width: 50px;
  }
}
</style>

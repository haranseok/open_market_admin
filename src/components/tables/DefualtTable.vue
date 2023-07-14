<template>
  <table>
    <thead>
      <tr>
        <th v-for="(th, i) in props.th" :key="i">
          {{ th }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(tr, i) in props.tr" :key="i">
        <td v-for="(td, j) in tr" :key="j">
          <div v-if="j <= 10">{{ td }}</div>
          <v-btn v-if="j > 10" variant="text">
            <v-icon>{{ td }}</v-icon>
          </v-btn>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
const props = defineProps(["th", "tr"]);
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
    tr {
      td {
        padding: 5px;
        text-align: center;
        border: 1px solid #dbdbdb;
        &:nth-child(12),
        &:nth-child(13) {
          width: 50px;
        }
      }
    }
  }
}
</style>

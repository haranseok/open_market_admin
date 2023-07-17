<template>
  <table>
    <thead>
      <tr>
        <th v-for="(th, i) in headers" :key="i">
          {{ th }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(tr, i) in items" :key="i">
        <td>{{ tr.id }}</td>
        <td>{{ tr.store }}</td>
        <td>
          <img
            src="@/assets/images/exclude.png"
            alt="등록한 이미지가 없는 경우 대체할 이미지"
            v-if="tr.img === ''"
          />
          <img :src="`tr.img`" alt="" v-else />
        </td>
        <td>{{ tr.name }}</td>
        <td>{{ tr.goodsName }}</td>
        <td>{{ tr.status }}</td>
        <td>{{ tr.price }}</td>
        <td>{{ tr.option }}</td>
        <td>{{ tr.imgStatus }}</td>
        <td>{{ tr.createDate }}</td>
        <td><v-btn icon="mdi-pencil-circle" variant="text"></v-btn></td>
        <td><v-btn icon="mdi-delete-circle" variant="text"></v-btn></td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
// const props = defineProps(["th", "tr"]);
export interface Tables {
  headers: any;
  items?: any;
}

const { headers, items } = defineProps<Tables>();
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
        &:nth-child(11),
        &:nth-child(12) {
          width: 50px;
        }
        img {
          width: 60px;
          background: rgb(208, 231, 238);
        }
      }
    }
  }
}
</style>

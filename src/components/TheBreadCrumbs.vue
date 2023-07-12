<template>
  <article>
    <div class="inner-container">
      <h3 class="kr">{{ props.title }}</h3>
      <v-breadcrumbs :items="props.items">
        <template v-slot:title="{ item }">
          {{ item.title.toUpperCase() }}
        </template>
      </v-breadcrumbs>
    </div>
  </article>
</template>

<script lang="ts" setup>
const props = defineProps(["title", "items"]);
</script>

<style lang="scss" scoped>
article {
  background: #fff;
  border-bottom: 1px solid #eee;
}
.inner-container {
  padding: 1% 0 0.5% 0;
  h3 {
    color: #222;
    font-size: 1.5rem;
    font-weight: 300;
  }
}
</style>

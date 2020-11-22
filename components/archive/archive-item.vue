<template>
  <v-card class="d-flex flex-column">
    <v-img max-height="100"
           :src="item.thumbnail"
    ></v-img>
    <v-card-title>{{ item.title }}</v-card-title>

    <archive-item-stack :item="item" />

    <v-card-text>
      {{ item.description }}
    </v-card-text>

    <v-card-actions class="actions">
      <v-btn nuxt
             :to="'/details/'+item.slug"
             block
      >
        Details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { IItem } from './types';

import archiveItemStack from './archive-item-stack.vue';

export default Vue.extend({
  name: "archive-item",
  props: {
    item: Object as () => IItem
  },
  components: {
    'archive-item-stack': archiveItemStack
  }
})
</script>

<style lang="less" scoped>
.actions {
  flex-grow: 1;
  align-items: flex-end;
}
</style>

<template lang="pug">
  v-row(
    align="center"
    justify="center"
    )
    v-col.order-1.order-sm-0(
      cols="12"
      sm="4"
      xl="3"
      )
      v-card
        v-card-title Left panel
        v-card-text Left panel content
    v-col.order-0.order-sm-1(
      cols="12"
      sm="8"
      xl="9"
      )
      v-card
        v-card-title Right article
        v-card-text Right content
</template>

<script lang="ts">
// TODO: add column to the left of main article (like VK profile column) containing things like Stack used and Status

import Vue from 'vue';

export default Vue.extend({
  name: 'description-slug',
  data() {
    return {
      page: undefined
    }
  },
  async asyncData ({ $content, params }) {
    const page = await $content(params.slug).fetch()

    return {
      page
    }
  }
})
</script>

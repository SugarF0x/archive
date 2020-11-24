<template lang="pug">
  v-layout(
    column
    justify-center
    align-center
    )
    v-card.d-inline-flex.flex-column.text-center.pa-2
      h1.display-3 {{ error.statusCode }}
      v-card-text
        h3 {{ error.message }}
        p.text-left.mt-5.pa-2.secondary.white--text(v-if="error.config") {{ error.config }}
      v-card-actions.actions
        v-btn(
          nuxt
          to="/"
          color="blue darken-2"
          )
          v-icon(left) mdi-home
          | Home Page
        v-spacer
        v-btn(
          @click="reload"
          color="blue darken-2"
          v-if="error.statusCode !== 404"
          ) Reload
          v-icon(right) mdi-update
        v-btn(
          @click="$router.go(-1)"
          color="blue darken-2"
          v-else
          ) Go back
          v-icon(right) mdi-undo-variant
</template>

<script lang="ts">
// TODO: change error code block into native vuetify code block

import Vue from 'vue';

export default Vue.extend({
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    return {
      title: this.error.statusCode + ' ' + this.error.message
    }
  },
  methods: {
    reload() {
      document.location.reload()
    }
  }
})
</script>

<style lang="sass" scoped>
.actions
  > *
    margin-right: .5rem
  > *:last-child
    margin-right: 0
</style>

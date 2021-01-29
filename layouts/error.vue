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
        code.text-left.mt-5.pa-2(v-if="error.config") {{ error.config }}
      v-card-actions.actions
        v-btn(
          nuxt
          :to="localePath('/')"
          color="blue darken-2"
        )
          v-icon(left) mdi-home
          | {{ $t("error.home") }}
        v-spacer
        v-btn(
          @click="reload"
          color="blue darken-2"
          v-if="error.statusCode !== 404"
        ) {{ $t("error.reload") }}
          v-icon(right) mdi-update
        v-btn(
          @click="$router.go(-1)"
          color="blue darken-2"
          v-else
        ) {{ $t("error.back") }}
          v-icon(right) mdi-undo-variant
</template>

<script lang="ts">
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

<i18n lang="yaml">
en:
  error.home: home
  error.reload: reload
  error.back: back
ru:
  error.home: домой
  error.reload: обновить
  error.back: назад
</i18n>

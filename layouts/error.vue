<template>
  <v-layout column
            justify-center
            align-center
  >
    <v-card class="d-inline-flex flex-column text-center pa-2">
      <h1 class="display-3">
          {{ error.statusCode }}
      </h1>
      <v-card-text>
        <h3>{{ error.message }}</h3>
        <p v-if="error.config" class="text-left mt-5 pa-2 secondary white--text">{{ error.config }}</p>
      </v-card-text>
      <v-card-actions class="actions">
        <v-btn nuxt
               to="/"
               color="blue darken-2"
        >
          <v-icon left>mdi-home</v-icon>
          Home Page
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="reload"
               color="blue darken-2"
               v-if="error.statusCode !== 404"
        >
          Reload
          <v-icon right>mdi-update</v-icon>
        </v-btn>
        <v-btn @click="$router.go(-1)"
               color="blue darken-2"
               v-else
        >
          Go back
          <v-icon right>mdi-undo-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
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

<style lang="less" scoped>
.actions {
  > * {
    margin-right: .5rem;
  }
  > *:last-child {
    margin-right: 0
  }
}
</style>

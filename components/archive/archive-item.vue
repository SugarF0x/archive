<template lang="pug">
  v-card.d-flex.flex-column.text-center
    v-img.position-relative(
      max-height="100"
      min-height="100"
      :src="item.thumbnail"
    )
      v-tooltip(
        top
        max-width="350"
      )
        template(v-slot:activator="{ on, attrs }")
          v-chip.status(
            :color="status.color"
            v-bind="attrs"
            v-on="on"
          ) {{ item.status }}
        span {{ status.title }}

    v-card-title.justify-center {{ item.title }}

    archive-item-stack(:item="item")

    v-card-text {{ item.description }}

    v-card-actions.actions
      v-btn(
        nuxt
        :to="'/details/'+item.slug"
        block
      ) Details
</template>

<script lang="ts">
// TODO: turn chips into flags (colored triangles in the top-right corner)

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
  },
  computed: {
    status() {
      switch (this.item.status) {
        case 'active':
          return {
            color: 'green',
            title: 'This project is currently being actively worked on'
          }
        case 'stagnant':
          return {
            color: 'orange',
            title: 'Work on this project is frozen for the time being for either I plan to return to it or the circumstances are beyond my control'
          }
        case 'archived':
          return {
            color: 'red',
            title: 'Work on this project is stopped for it is either complete, or I am unlikely to return to it'
          }
        default:
          return {
            color: 'primary',
            title: 'unidentified'
          }
      }
    }
  }
})
</script>

<style lang="sass" scoped>
.actions
  flex-grow: 1
  align-items: flex-end
.status
  margin: .3rem
  position: absolute
  top: 0
  right: 0
  text-transform: uppercase
</style>

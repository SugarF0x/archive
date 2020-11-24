<template lang="pug">
  v-card.d-flex.flex-column.text-center.card
    v-img.position-relative(:src="item.thumbnail")
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

    v-container.pa-0
    v-row(
      justify="center"
      no-gutters
    )
      v-col.d-flex.justify-center(
        cols="2"
        v-for="icon in item.stack"
        :key="item.title+icon"
      )
        v-icon(color="transparent") mdi-cancel
        stack-icon(
          :item="icon"
          tooltip
        )
        v-icon(color="transparent") mdi-cancel

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

import StackIcon from '@/components/stack/stack-icon.vue';

export default Vue.extend({
  name: "archive-item",
  props: {
    item: Object as () => IItem
  },
  components: {
    'stack-icon': StackIcon
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
.card
  > *
    flex-grow: 0
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

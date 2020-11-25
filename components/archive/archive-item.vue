<template lang="pug">
  v-card.d-flex.flex-column.text-center.card
    v-img.position-relative(
      :src="item.thumbnail"
      min-height="100"
      max-height="100"
      )
      v-scroll-x-reverse-transition(origin="top right 0")
        v-hover(v-slot="{ hover }")
          v-card.chip(
            :color="statusColor"
            tile
            :class="hover ? '' : 'foldChip'"
            ) {{ item.status }}

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
        // rendered icon
        stack-icon(:item="icon")
        // ghost icon with the tooltip
        stack-icon.tooltip(
          :item="icon"
          tooltip
        )

    v-card-text {{ item.description }}

    v-card-actions.actions
      v-btn(
        nuxt
        :to="'/details/'+item.slug"
        block
        ) Details
</template>

<script lang="ts">
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
    statusColor() {
      switch (this.item.status) {
        case 'active':
          return 'green'
        case 'stagnant':
          return 'orange'
        case 'archived':
          return 'red'
        default:
          return 'primary'
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

.tooltip
  opacity: 0
  position: absolute

.chip
  position: absolute
  height: 1.5rem
  line-height: 1.5rem
  top: 0
  right: 0
  transition: all .5s
  font-size: 1rem
  width: 100%
  min-height: 1rem
  min-width: 1rem
  text-transform: uppercase
  user-select: none
.foldChip
  width: 2rem
  right: -1.2rem
  color: transparent
  transform: skewX(45deg)
</style>

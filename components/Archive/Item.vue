<template lang="pug">
  v-card.d-flex.flex-column.text-center.card
    v-img.position-relative(
      :src="require(`~/assets/img/thumbnail/${item.slug}.jpg?preload`)"
      aspect-ratio="2"
    )
      template(v-slot:placeholder)
        v-row(
          class="fill-height ma-0"
          align="center"
          justify="center"
        )
          v-progress-circular(
            indeterminate
            color="grey lighten-5"
          )
      v-scroll-x-reverse-transition(origin="top right 0")
        v-hover(v-slot="{ hover }")
          v-card.chip(
            :color="statusColor"
            tile
            :class="hover ? '' : 'foldChip'"
          ) {{ $t(`status.${item.status}`) }}

    v-card-title.justify-center {{ item.title }}

    v-container.pa-0
    v-row(
      justify="center"
      no-gutters
    ).mx-5
      v-col.d-flex.justify-center.mb-5(
        cols="3"
        v-for="icon in item.stack"
        :key="item.title+icon"
      )
        // rendered icon
        StackIcon(:item="icon")
        // ghost icon with the tooltip
        StackIcon.tooltip(
          :item="icon"
          tooltip
        )

    v-card-text.pt-0 {{ item.description }}

    v-card-actions.actions
      v-btn(
        nuxt
        :to="localePath('/details/'+item.slug)"
        block
        ) {{ $t("details") }}
</template>

<script lang="ts">
import Vue from 'vue';
import { IItem } from './types';

export default Vue.extend({
  name: "ArchiveItem",
  props: {
    item: Object as () => IItem
  },
  computed: {
    statusColor() {
      switch (this.item.status) {
        case 'active':
          return 'green'
        case 'stagnant':
          return 'orange'
        case 'supported':
          return 'blue'
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
  overflow: hidden
  transform: skewX(45deg)
</style>

<i18n lang="yaml">
en:
  details: details
ru:
  details: подробнее
</i18n>

<template lang="pug">
  div.icon(v-if="!tooltip")
    v-icon(:color="icon.fill") mdi-{{ icon.name }}
    span(v-if="name") {{ icon.desc }}
  div(v-else)
    v-tooltip(top)
      template(v-slot:activator="{ on, attrs }")
        v-icon(
          v-bind="attrs"
          v-on="on"
          :color="icon.fill"
        ) mdi-{{ icon.name }}
      span {{ icon.desc }}
</template>

<script lang="ts">
import Vue from 'vue';
import { TStack, IStackIcon, stack } from './types'

export default Vue.extend({
  name: "StackIcon",
  props: {
    item: String as () => TStack,
    name: Boolean,
    tooltip: Boolean
  },
  computed: {
    icon(): IStackIcon | 0 {
      if (stack.hasOwnProperty(this.item)) {
        return stack[this.item]
      }
      return 0
    }
  }
})
</script>

<style lang="sass" scoped>
.icon
  display: flex
  flex-flow: row
  align-items: center
  span
    margin-left: .3rem
</style>

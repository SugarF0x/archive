<template lang="pug">
  v-container.pa-0
    v-row(
      justify="center"
      no-gutters
      )
      v-col.d-flex.justify-center(
        cols="2"
        v-for="icon in stack"
        :key="item.title+icon.name"
        )
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
import { IItem, IItemStack, stack } from './types'

export default Vue.extend({
  name: "archive-item-stack",
  props: {
    item: Object as () => IItem
  },
  computed: {
    stack(): IItemStack[] | 0 {
      if (this.item.stack.length) {
        let result: IItemStack[] = [];
        this.item.stack.forEach(entry => {
          if (stack.hasOwnProperty(entry)) {
            result.push(stack[entry])
          }
        })
        return result.length ? result : 0
      } else {
        return 0
      }
    }
  }
})
</script>

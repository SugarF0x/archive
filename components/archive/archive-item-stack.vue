<template>
  <v-container class="pa-0">
    <v-row justify="center" no-gutters>
      <v-col cols="2"
             class="d-flex justify-center"
             v-for="icon in stack"
             :key="item.title+icon.name"
      >
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs"
                    v-on="on"
                    :color="icon.fill"
            >
              mdi-{{ icon.name }}
            </v-icon>
          </template>
          <span>
            {{ icon.desc }}
          </span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
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

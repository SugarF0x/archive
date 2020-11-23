<template>
<!--  <v-row justify="center"-->
<!--         align="center"-->
<!--  >-->
<!--    <v-col cols="12"-->
<!--           sm="10"-->
<!--           md="9"-->
<!--           lg="8"-->
<!--           xl="6"-->
<!--    >-->
<!--      <v-row>-->
<!--        <v-col cols="12">-->
<!--          <v-card>-->
<!--            <v-img max-height="200"-->
<!--                   min-height="200"-->
<!--                   :src="page.banner"-->
<!--            />-->
<!--          </v-card>-->
<!--        </v-col>-->
<!--        <v-col cols="12">-->
<!--          <v-card tag="article">-->
<!--            <v-card-title>-->
<!--              {{ page.title }}-->
<!--            </v-card-title>-->
<!--            <v-card-text>-->
<!--              <nuxt-content :document="page" />-->
<!--            </v-card-text>-->
<!--          </v-card>-->
<!--        </v-col>-->
<!--      </v-row>-->
<!--    </v-col>-->
<!--  </v-row>-->

  <v-row align="center"
         justify="center"
  >
    <v-col cols="12"
           sm="4"
           xl="3"
           class="order-1 order-sm-0"
    >
      <v-card>
        <v-card-title>Left panel</v-card-title>
        <v-card-text>Left panel content</v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12"
           sm="8"
           xl="9"
           class="order-0 order-sm-1"
    >
      <v-card>
        <v-card-title>Right article</v-card-title>
        <v-card-text>Right content</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
// TODO: add column to the left of main article (like VK profile column) containing things like Stack used and Status

import Vue from 'vue';

export default Vue.extend({
  name: 'description-slug',
  data() {
    return {
      page: undefined
    }
  },
  async asyncData ({ $content, params }) {
    const page = await $content(params.slug).fetch()

    return {
      page
    }
  }
})
</script>

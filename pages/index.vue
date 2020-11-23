<template>
  <v-row justify="center"
         align="center"
  >
    <v-col cols="11"
           sm="10"
           md="9"
           lg="8"
           xl="6"
    >
      <v-card>
        <v-card-title>
          Welcome to Sugar Archives
        </v-card-title>
        <v-card-text>
          <p>
            Here you will find all the projects I have been working on in the past,
            maintain now or keep working in the present
          </p>
          <p>
            The project will also contain description of it's functionality
            as well as history behind it's creation
          </p>
          <p>
            Development stack is displayed along the other useful information like snippets
          </p>

          An active link is provided if one exists
        </v-card-text>
      </v-card>
      <v-row v-if="!projects">
        <v-col cols="12"
               sm="6"
               md="4"
               v-for="item in 3"
               :key="item+'skeleton'"
               class="d-flex align-content-stretch"
        >
          <v-skeleton-loader class="mx-auto"
                             width="100%"
                             type="card"
          />
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="12"
               sm="6"
               md="4"
               v-for="item in projects"
               :key="item.title"
               class="d-flex align-content-stretch"
        >
          <archive-item :item="item" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { IItem } from '@/components/archive/types';

import archiveItem from '@/components/archive/archive-item.vue';

export default Vue.extend({
  name: 'home',
  components: {
    'archive-item': archiveItem
  },
  data() {
    return {
      projects: undefined
    }
  },
  async asyncData({ $content }) {
    let content = await $content().fetch();
    const projects: IItem[] = [];
    content.forEach((entry: any) => {
      projects.push({
        title: entry.title,
        description: entry.description,
        stack: entry.stack,
        thumbnail: entry.thumbnail,
        slug: entry.slug,
        status: entry.status
      })
    })
    return { projects }
  }
})
</script>

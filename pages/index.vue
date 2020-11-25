<template lang="pug">
  v-row(
    justify="center"
    align="center"
    )
    v-col(
      cols="11"
      sm="10"
      md="9"
      lg="8"
      xl="6"
      )
      v-row
        v-col(cols="12")
          v-card
            v-card-title Welcome to Sugar Archives
            v-card-text
              p.
                Here you will find all the projects I have been working on in the past,
                maintain now or keep working in the present
              p.
                The project will also contain description of it's functionality
                as well as history behind it's creation
              p Development stack is displayed along the other useful information like snippets
              | An active link is provided if one exists
      v-row(v-if="!sorted.length")
        v-col.d-flex.align-content-stretch(
          cols="12"
          sm="6"
          md="4"
          v-for="item in 3"
          :key="item+'skeleton'"
          )
          v-skeleton-loader.mx-auto(
            width="100%"
            type="card"
            )
      v-row(v-else)
        v-col.d-flex.align-content-stretch(
          cols="12"
          sm="6"
          md="4"
          v-for="item in sorted"
          :key="item.title"
          )
          archive-item(:item="item")
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
      projects: [] as IItem[]
    }
  },
  computed: {
    /**
     * Sort projects by their status:
     * 1. Active
     * 2. Stagnant
     * 3. Archived
     */
    sorted(): IItem[] {
      return this.projects.sort((a, b) => {
        const priority = [
          'active',
          'stagnant',
          'archived'
        ]
        if (priority.indexOf(a.status) > priority.indexOf(b.status)) {
          return 1;
        } else if (priority.indexOf(a.status) < priority.indexOf(b.status)) {
          return -1;
        }
        return 0;
      });
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

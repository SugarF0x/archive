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
      <v-container>
        <v-row>
          <v-col cols="12"
                 sm="6"
                 md="4"
                 v-for="item in projects"
                 :key="item.title"
          >
            <archive-item :item="item" />
          </v-col>
        </v-row>
      </v-container>
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
      projects: [
        {
          title: "Snake",
          description: "Snake game written on pure JS using table element as display",
          stack: ['html','css','js'],
          thumbnail: "https://placehold.it/200x100/14C027/FFF/?text=Snake"
        },
        {
          title: "Wedding",
          description: "Wedding invitation with customisable header text",
          stack: ['html','css','js','bootstrap'],
          thumbnail: "https://placehold.it/200x100/FFF/00DA18?text=Wedding"
        },
        {
          title: "Simple Assistant",
          description: "Automation plugin for SimpleMMO Web-browser game",
          stack: ['ts','vue','webpack'],
          thumbnail: "https://placehold.it/200x100/0404B4/FF0?text=Simple%20Assistant"
        },
        {
          title: "Raider",
          description: "Clone of Dungeon Raid",
          stack: ['ts','vue', 'konva'],
          thumbnail: "https://placehold.it/200x100/000/F00?text=Raider"
        },
      ] as IItem[]
    }
  },
  async asyncData() {
    // fetch $content here
  }
})
</script>

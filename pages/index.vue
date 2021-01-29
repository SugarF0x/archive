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
            v-card-title {{ $t('home.splash.title') }}
            v-card-text
              p {{ $t('home.splash.p.1') }}
              p {{ $t('home.splash.p.2') }}
              p {{ $t('home.splash.p.3') }}
              | {{ $t('home.splash.p.4') }}
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
          ArchiveItem(:item="item")
</template>

<script lang="ts">
import Vue from 'vue';
import { IItem } from '@/components/archive/types';

import ArchiveItem from '~/components/archive/ArchiveItem.vue';

export default Vue.extend({
  name: 'home',
  components: {
    ArchiveItem
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
     * 2. Supported
     * 3. Stagnant
     * 4. Archived
     */
    sorted(): IItem[] {
      return this.projects.sort((a, b) => {
        const priority = [
          'active',
          'supported',
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
  async asyncData({ $content, app }) {
    let content = await $content(app.i18n.locale).fetch();
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

<i18n>
{
  "en": {
    "home.splash.title": "Welcome to Sugar Archives.",
    "home.splash.p.1": "Here you will find all the projects I have been working on in the past, maintain now or keep working in the present.",
    "home.splash.p.2": "The project will also contain description of it's functionality as well as history behind it's creation.",
    "home.splash.p.3": "Development stack is displayed along the other useful information like snippets.",
    "home.splash.p.4": "An active link is provided if one exists."
  },
  "ru": {
    "home.splash.title": "Добро пожаловать в Архивы.",
    "home.splash.p.1": "Здесь покоится бо́льшая часть моих проектов, как уже законченных, так и тех, над которыми продолжается активная работа.",
    "home.splash.p.2": "В описаниях проектов можно найти как описание их функционала, так и историю их создания.",
    "home.splash.p.3": "У каждого проекта приведён краткий набор наиболее важных инструментов использованных при разработке.",
    "home.splash.p.4": "Если рабочая ссылка на проект существует, она также будет предоставлена на странице описания проекта."
  }
}
</i18n>

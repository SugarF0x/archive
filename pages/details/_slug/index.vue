<template lang="pug">
  v-row(justify="center")
    v-col(
      cols="12"
      lg="10"
      )
      v-row(justify="center")
        v-col.order-1.order-sm-0.pu-0.pu-sm-1(
          cols="12"
          sm="4"
          xl="3"
          )
          v-row()
            v-col(cols="12")
              v-card
                v-card-title.text-capitalize {{ $t("status") }}:
                  v-chip.ml-2.text-uppercase(:color="chipColor") {{ $t(`status.${page.status}`) }}
                v-card-text {{ page.life }}
            v-col(cols="12")
              v-card
                v-card-title.text-capitalize {{ $t("stack") }}:
                v-card-text
                  ul
                    li(v-for="n in page.stack")
                      StackIcon(
                        :item="n"
                        name
                        )
            v-col(cols="12")
              v-card
                v-card-actions.d-flex.flex-wrap.justify-space-between
                  v-btn.ma-1(
                    :href="page.git"
                    :disabled="!page.git"
                    )
                    v-icon(left) mdi-github
                    | GitHub
                  v-btn.ma-1(
                    :href="page.link"
                    :disabled="!page.link"
                    ) {{ $t("link") }}
                    v-icon(right) mdi-link

        v-col.order-0.order-sm-1.pb-0.pb-sm-1(
          cols="12"
          sm="8"
          xl="9"
          )
          v-row
            v-col(cols="12")
              v-card
                ImageComparison(
                  v-if="page.compareHeader"
                  :leftImage="require(`~/assets/img/header/${page.slug}/compare-left.jpg`).src"
                  :rightImage="require(`~/assets/img/header/${page.slug}/compare-right.jpg`).src"
                )
                v-img(
                  v-else
                  :src="require(`~/assets/img/header/${page.slug}.jpg?vuetify-preload`)"
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
            v-col.pb-0.pb-sm-1(cols="12")
              v-card(tag="article")
                v-card-title {{ page.title }}
                v-card-text
                  nuxt-content.details(:document="page")
</template>

<script lang="ts">
import Vue from 'vue';
import StackIcon from '~/components/stack/StackIcon.vue'
import ImageComparison from '~/components/ImageComparison.vue'

export default Vue.extend({
  name: 'description-slug',
  components: {
    StackIcon,
    ImageComparison
  },
  data() {
    return {
      page: undefined as any
    }
  },
  computed: {
    chipColor(): string {
      if (!this.page) return 'primary'
      switch (this.page.status) {
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
  },
  async asyncData ({ $content, params, app }) {
    const page = await $content(app.i18n.locale + '/' + params.slug).fetch()

    return {
      page
    }
  }
})
</script>

<style lang="sass" scoped>
h3
  margin-bottom: .5rem
</style>

<template lang="pug">
  v-app(dark)
    v-app-bar(app)
      router-link(
        :to="localePath('/')"
        style="text-decoration: none; color: inherit;"
      )
        v-row(
          justify="center"
          align="center"
        )
          v-img(
            src="/sgfx_line.webp"
            height="2.5rem"
            width="2.5rem"
            contain
          )
          v-toolbar-title#logo Archives
    v-main
      v-container
        nuxt
    v-footer(
      app
      absolute
    )
      span Sugar Archives &copy; {{ new Date().getFullYear() }}
</template>

<!--suppress CssUnknownTarget, comment: this is supposed to be prefixes with a tilda given it is to be mapped-->
<style lang="sass" scoped>
@font-face
  font-family: 'Kurbanistika'
  src: url('~assets/fonts/kurbanistika.otf')
#logo
  font-family: Kurbanistika, sans-serif
  font-size: 2.5rem
</style>

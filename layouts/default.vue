<template>
  <v-app dark >
    <v-app-bar app >
      <router-link to="/" style="text-decoration: none; color: inherit;">
        <v-row justify="center" align="center">
           <v-img src="/sgfx_line.webp" height="2.5rem" width="2.5rem" contain></v-img>
          <v-toolbar-title id="logo">
            Archives
          </v-toolbar-title>
        </v-row>
      </router-link>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app
              absolute
    >
      <span>Sugar Archives &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<style lang="less" scoped>
@font-face {
  font-family: 'Kurbanistika';
  src: url('/fonts/kurbanistika.otf');
}
#logo {
  font-family: Kurbanistika, sans-serif;
  font-size: 2.5rem;
}
</style>

<template>
  <v-app dark >
    <v-app-bar app >
      <v-toolbar-title v-text="'Archives'" />
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


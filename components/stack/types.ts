const STACK_ITEMS = ['html', 'css', 'js', 'ts', 'bootstrap', 'vue', 'konva', 'webpack', 'node', 'nuxt', 'vuetify', 'pwa', 'plugin', 'mongo'] as const
export type TStack = typeof STACK_ITEMS[number]

/**
 * Supported stack icons
 */
export interface IStackIcon {
  name: string;
  desc: string;
  fill: string;
}
export type IStack = {
  [K in TStack]: IStackIcon;
}

export const stack: IStack = {
  html: {
    name: 'language-html5',
    desc: 'HTML5',
    fill: 'orange'
  },
  css: {
    name: 'language-css3',
    desc: 'CSS3',
    fill: 'blue'
  },
  js: {
    name: 'language-javascript',
    desc: 'JavaScript',
    fill: 'yellow'
  },
  ts: {
    name: 'language-typescript',
    desc: 'TypeScript',
    fill: 'blue'
  },
  bootstrap: {
    name: 'bootstrap',
    desc: 'Bootstrap 4',
    fill: 'purple'
  },
  vue: {
    name: 'vuejs',
    desc: 'Vue',
    fill: 'green'
  },
  konva: {
    name: 'alpha-k-box',
    desc: 'Konva',
    fill: 'light-green'
  },
  webpack: {
    name: 'webpack',
    desc: 'Webpack',
    fill: 'cyan'
  },
  node: {
    name: 'nodejs',
    desc: 'Node',
    fill: 'green'
  },
  nuxt: {
    name: 'nuxt',
    desc: 'Nuxt',
    fill: 'green'
  },
  vuetify: {
    name: 'vuetify',
    desc: 'Vuetify',
    fill: 'light-blue'
  },
  pwa: {
    name: 'open-in-app',
    desc: 'PWA',
    fill: 'white'
  },
  plugin: {
    name: 'puzzle',
    desc: 'Chrome Extension',
    fill: 'grey'
  },
  mongo: {
    name: 'leaf',
    desc: 'MongoDB',
    fill: 'light-green'
  }
}

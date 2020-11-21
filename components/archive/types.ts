export type TStack = 'html' | 'css' | 'js' | 'ts' | 'bootstrap' | 'vue' | 'konva' | 'webpack' | 'node';

export interface IItem {
  title: string;
  description: string;
  stack: TStack[],
  thumbnail: string;
}

/**
 * Supported stack icons
 */
export interface IItemStack {
  name: string;
  desc: string;
  fill: string;
}
export type IStack = {
  [K in TStack]: IItemStack;
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
  }
}

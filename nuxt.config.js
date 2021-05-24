const env = require('dotenv').config()
export default {
  mode: 'universal',
  target: 'server',
  env: env.parsed,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tngeene.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'I build things for the web',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }],
    script: [
      { src: 'https://kit.fontawesome.com/0218909da0.js' },
      // { src: '/dist/vue-social-sharing.js' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.css',
    '~/assets/css/lineIcons/WebFont/font-css/LineIcons.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/disqus.js', mode: 'client' },
    { src: '~/plugins/aos', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://strapi.nuxtjs.org/
    '@nuxtjs/strapi',
    // https://openbase.com/js/@nuxtjs/markdownit/documentation
    '@nuxtjs/markdownit',
    // https://github.com/neneos/nuxt-animate.css/
    '@neneos/nuxt-animate.css',
    // https://www.npmjs.com/package/vue-social-sharing
    'vue-social-sharing/nuxt',
  ],

  // Strapi module configuration: https://strapi.nuxtjs.org/setup
  strapi: {
    url: process.env.STRAPI_URL,
    entities: [
      'about',
      'articles',
      'article-series',
      'categories',
      'projects',
      'tags',
    ],
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: `#44a076`,
    continuous: true,
    duration: 5000,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

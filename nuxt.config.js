export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Katy Bowman',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Old+Standard+TT|Open+Sans'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/scss/base.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~plugins/filters.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit',
  ],
  markdownit: {
    injected: true
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.GRAPHCMS_URI
      }
    }
  },
  
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
}

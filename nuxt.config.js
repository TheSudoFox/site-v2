global.HTMLElement = typeof window === 'undefined' ? Object : window.HTMLElement // Hotfix for https://github.com/buefy/buefy/issues/712

module.exports = {
  head: {
    title: 'Ethan Fox\'s home',
    meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Ethan Fox\'s personal website' }
    ],
    link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  build: {
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    ['nuxtent', 'nuxt-buefy']
  ],
  plugins: [
  { src: '~plugins/ga.js', ssr: false }
  ],
  buefy: {
  },
  loading: { color: '#3B8070' }
}

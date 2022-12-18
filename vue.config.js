const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'quasar'
  ],

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },

  pwa: {
    name: "Malefiz",
    themeColor: '#efa032',
    mobileWebAppCapable: 'yes',
    mobileWebAppCache:'yes',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppCache: 'yes',
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      navigateFallback: '/index.html',
      skipWaiting: true,
      clientsClaim: true
    },
    manifestOptions: {
      name: "Malefiz",
      short_name: "Malefiz",
      start_url: '.',
      display: 'standalone',
      theme_color: '#efa032'
    }
  }
})

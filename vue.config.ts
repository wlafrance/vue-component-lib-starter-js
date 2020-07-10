module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/main.scss"`,
      },
      scss: {
        prependData: `@import "~@/assets/main.scss";`,
      },
    },
  },
  chainWebpack: config => {
    config.externals({
      moment: 'moment'
    })
  }
}
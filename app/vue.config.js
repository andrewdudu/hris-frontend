const path = require('path');

const isMock = process.env.VUE_APP_ENVIRONMENT !== 'prod' && process.env.VUE_APP_IS_MOCK;

module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/css/_variables.scss";`,
      },
    },
  },
  chainWebpack: config => {
    config.resolve.alias.set(
        'vue-mock',
        (isMock ? path.resolve(__dirname, `src/api/mock`) : path.resolve(__dirname, `src/empty.js`))
    )
  }
};

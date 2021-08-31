module.exports = {
  lintOnSave: false,
  transpileDependencies: [
    "vuetify",
  ],
  chainWebpack: (config) => {
    config.module
      .rule("ts")
      .use("ts-loader")
      .loader("ts-loader");
  },
  publicPath: (process.env.NODE_ENV === 'production') ? '/leaderboard/': '/'
};

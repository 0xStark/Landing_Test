module.exports = {
  publicPath: "/",
  productionSourceMap: false,
  devServer: {
    open: true,
    port: 9000,
    proxy: {
      "/v1": {
        //target: 'https://eshs.pdnotary.cn/api/v1',
        target: "https://xinshijie.pdnotary.cn/api/v1",
        ws: true,
        changeOrigin: true,
        pathRewrite: { "^/v1": "" },
      },
    },
  },
  chainWebpack: (config) => {
    // GraphQL Loader
    config.module
      .rule("graphql")
      .test(/\.graphql|.gql$/)
      .use("graphql-tag/loader")
      .loader("graphql-tag/loader")
      .end();
  },
};

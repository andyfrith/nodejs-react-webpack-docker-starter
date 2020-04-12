const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: ["./src/index.tsx"],
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: `${__dirname}/public`,
    publicPath: "/",
    filename: "app.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

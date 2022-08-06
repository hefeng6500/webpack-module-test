// import * as path from "path";
// import { fileURLToPath } from "url";
// import * as HtmlWebpackPlugin from "html-webpack-plugin";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// export default {
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      name: "MyLibrary",
      type: "umd",
      auxiliaryComment: {
        root: "Root Comment",
        commonjs: "CommonJS Comment",
        commonjs2: "CommonJS2 Comment",
        amd: "AMD Comment",
      },
      umdNamedDefine: true,
    },
    // iife: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // new HtmlWebpackPlugin.default({
      title: "Custom template",
      template: "public/index.html",
    }),
  ],
  optimization: {
    minimize: false,
  },
};

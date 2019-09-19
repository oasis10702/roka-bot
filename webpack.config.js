const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const buildPath = path.resolve(__dirname, "dist");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: buildPath,
    filename: "bundle.js",
    publicPath: '/'
  },
  target: "node",
  resolve: {
    modules: ["src", "node_modules"],
    extensions: [".tsx", ".ts", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  mode: 'development',
  devServer: {
    contentBase: buildPath,
    port: 8080,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};

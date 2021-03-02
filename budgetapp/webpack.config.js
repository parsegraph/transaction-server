var path = require("path");

module.exports = {
  entry: "./frontend/src/index.js",
  output: {
    path: path.join(__dirname, "./frontend/static/frontend/"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  mode: "development",
  devtool: "inline-source-map",
};

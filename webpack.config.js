const path = require("path");

module.exports = {
  mode: "development",
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "./src/dist/js"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

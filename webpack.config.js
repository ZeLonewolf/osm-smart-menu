const path = require("path");

module.exports = {
  entry: {
    "injectable-content-script": "./src/injectable-content-script.ts",
    "popup/script": "./src/popup/script.ts"
  },
  output: {
    path: path.resolve(__dirname, "addon"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
};
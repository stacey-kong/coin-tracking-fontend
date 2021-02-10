var path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'babel-loader'.
      { test: /\.tsx?$/, loader: "babel-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader", enforce: "pre" },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM",
  // },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};

const path = require("path");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer"); // help tailwindcss to work

module.exports = (env, argv) => {
  return {
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
          test: /\.(scss|css)$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
            {
              loader: "postcss-loader",
              options: {
                config: {
                  path: path.resolve(__dirname, "./postcss.config.js"),
                },
                sourceMap: true,
              },
            },
          ],
        },

  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM",
  // },

  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
};

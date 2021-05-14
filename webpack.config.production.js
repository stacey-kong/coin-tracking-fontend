const path = require("path");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer"); // help tailwindcss to work
const Dotenv = require("dotenv-webpack"); //enviroment variable
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const envPath = env.ENVIRONMENT ? `.env.${env.ENVIRONMENT}` : ".env";
  return {
    mode: "production",
    entry: ["babel-polyfill", "./src/index.tsx"],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].bundle.js",
      clean: true,
      //   chunkFilename: '[id].chunk.js',
      //   publicPath: './dist'
    },

    resolve: {
      extensions: [".tsx", ".ts", ".js", ".json"],
    },

    module: {
      rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'babel-loader'.
        { test: /\.(tsx?|js)$/, loader: "babel-loader" },

        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        // { test: /\.js$/, loader: "source-map-loader", enforce: "pre" },
        {
          test: /\.(scss|css)$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "images/[hash]-[name].[ext]",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new Dotenv({
        path: envPath,
      }),
      new HtmlWebpackPlugin({
        inject:"body",
        template: "./src/index.html",
      }),
    ],
    optimization: {
      chunkIds: "size",
      // method of generating ids for chunks
      moduleIds: "size",
      // method of generating ids for modules
      mangleExports: "size",
      // rename export names to shorter names
      minimize: true,
      // minimize the output files
      minimizer: [new CssMinimizerPlugin(), "..."],
      // minimizers to use for the output files

      /* Advanced optimizations (click to show) */

      splitChunks: {
        chunks: "all",
      },
    },
  };
};

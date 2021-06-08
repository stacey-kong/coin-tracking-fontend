const path = require("path");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer"); // help tailwindcss to work
const Dotenv = require("dotenv-webpack"); //enviroment variable
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AssetsPlugin = require("assets-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
  const envPath = env.ENVIRONMENT ? `.env.${env.ENVIRONMENT}` : ".env";
  return {
    mode: "production",
    entry: {
      index: {
        import: "./src/index.tsx",
        dependOn: "shared",
      },
      another: {
        import: "./src/another-module.js",
        dependOn: "shared",
      },
      shared: "lodash",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].bundle.js",
      // chunkFilename: "[name].bundle.js",
      // clean: true,
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
        inject: "body",
        template: "./src/index.html",
      }),
      new AssetsPlugin({
        prettyPrint: true,
        filename: "assets.json",
        path: path.resolve(__dirname, "dist"),
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
      minimizer: [
        new CssMinimizerPlugin(),
        new UglifyJSPlugin({
          uglifyOptions: {
            sourceMap: true,
            compress: {
              drop_console: true,
              conditionals: true,
              unused: true,
              comparisons: true,
              dead_code: true,
              if_return: true,
              join_vars: true,
              ie8: false,
            },
            output: {
              comments: false,
            },
          },
        }),
        // new TerserPlugin(),
      ],
      // minimizers to use for the output files

      /* Advanced optimizations */

      runtimeChunk: "single",

      splitChunks: {
        chunks: "all",
        // cacheGroups: {
        //   commons: {
        //     test: /[\\/]node_modules[\\/]/,
        //     name: "vendors",
        //     chunks: "all",
        //   },
        // },
      },
    },
  };
};

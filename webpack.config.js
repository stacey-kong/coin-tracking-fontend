const path = require("path");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer"); // help tailwindcss to work
const Dotenv = require("dotenv-webpack"); //enviroment variable

module.exports = (env, argv) => {
  const envPath = env.ENVIRONMENT ? `.env.${env.ENVIRONMENT}` : ".env";
  return {
    mode: "development",
    entry: ["babel-polyfill", "./src/index.tsx"],
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
                sourceMap: true,
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
    ],
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9009,
    },
  };
};

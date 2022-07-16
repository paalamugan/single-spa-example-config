const path = require("path");
const webpack = require("webpack");
const { mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

require("dotenv").config({ path: path.resolve(process.cwd(), ".env") });

const isProductionMode = process.env.NODE_ENV === "production";

module.exports = (orgName, projectName, customizeWebpackOptions = {}) => {
  return (webpackConfigEnv, argv) => {
    const defaultConfig = singleSpaDefaults({
      orgName: orgName,
      projectName: projectName,
      webpackConfigEnv,
      argv,
    });

    const standalonePlugin = defaultConfig.plugins.find(
      (p) => p.constructor.name === "StandaloneSingleSpaPlugin"
    );

    if (standalonePlugin) {
      standalonePlugin.options.importMapUrl = new URL(
        "https://storage.googleapis.com/react.microfrontends.app/importmap.json"
      );
    }

    const externals = [
      /^rxjs\/?.*$/,
      /^lodash\/?.*$/,
      /^moment\/?.*$/,
      /^@myorg\/.*$/,
    ];

    if (webpackConfigEnv.standalone) {
      externals.push("react", "react-dom");
    }

    return mergeWithRules({
      module: {
        rules: {
          test: "match",
          use: "replace",
        },
      },
    })(
      defaultConfig,
      {
        // customize the webpack config here
        performance: {
          maxAssetSize: 1000000, // 1mb
          maxEntrypointSize: 1000000, // 1mb
        },
        externals,
        module: {
          rules: [
            {
              test: /\.(sc|sa|c)ss$/i,
              use: [
                isProductionMode
                  ? MiniCssExtractPlugin.loader
                  : require.resolve("style-loader", {
                      paths: [require.resolve("webpack-config-single-spa")],
                    }),
                require.resolve("css-loader", {
                  paths: [require.resolve("webpack-config-single-spa")],
                }),
                "postcss-loader",
                "sass-loader",
              ],
            },
          ],
        },
        plugins: [
          new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env),
          }),
          new MiniCssExtractPlugin({
            filename: isProductionMode
              ? "[name].[contenthash].css"
              : "[name].css",
          }),
        ],
      },
      customizeWebpackOptions
    );
  };
};

module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        useESModules: true,
        regenerator: false,
      },
    ],
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@app": "./src",
        },
      },
    ],
  ],
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: "current node",
          },
        ],
      ],
    },
  },
};

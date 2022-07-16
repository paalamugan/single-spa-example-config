# Single spa example webpack configuration

Predefined Some Common webpack configuration for single-spa with react and typescript

## Getting started

- Supported Node Engine

```
node - v16.12.0
yarn - 1.22.19
```

**How to Use it**

- Install as a node module package like

```sh
yarn add -D @single-spa-example/webpack
```

- Added Below line in your project `webpack.config.js` like,

```js
const {
  singleSpaReactWebpackConfig,
} = require("@single-spa-example/webpack");

module.exports = singleSpaReactWebpackConfig(<your_organization_name>, <your_project_name>, <customize_webpack_config>);
```

- Added Below line in your project `babel.config.js` like,

```js
const { singleSpaReactBabelConfig } = require("@single-spa-example/webpack");

module.exports = singleSpaReactBabelConfig(<customize_babel_config>);
```

- Added Below line in your project `tailwind.config.js` like,

```js
const { singleSpaTailwindConfig } = require("@single-spa-example/webpack");

module.exports = singleSpaTailwindConfig(<customize_tailwind_config>);
```

- Added Below line in your project `postcss.config.js` like,

```js
const { singleSpaPostcssConfig } = require("@single-spa-example/webpack");

module.exports = singleSpaPostcssConfig(<customize_postcss_config>);
```

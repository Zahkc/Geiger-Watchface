////////////////////////////////////////////////////////////////////////////////
// Template vars injected by projess_js.py:

// boolean
const isSandbox = false;

// Array with absolute file path strings
const entryFilenames = ["/home/zahkc/Documents/Projects/Pebble/geiger/src/rocky/index.js"];

// folder path string
const outputPath = "build/resources";

// file name string
const outputFilename = "rocky-app.js";

// Array with absolute folder path strings
const resolveRoots = ["/home/zahkc/.pebble-sdk/SDKs/current/sdk-core/pebble/common/include",
"/home/zahkc/.pebble-sdk/SDKs/current/sdk-core/pebble/common/tools/webpack",
"/home/zahkc/.pebble-sdk/SDKs/current/node_modules",
"/home/zahkc/Documents/Projects/Pebble/geiger/build/js"];

// Object, { alias1: 'path1', ... }
const resolveAliases = {"app_package.json": "/home/zahkc/Documents/Projects/Pebble/geiger/package.json"};

// null or Object with key 'sourceMapFilename'
const sourceMapConfig = null;

////////////////////////////////////////////////////////////////////////////////
// NOTE: Must escape dollar-signs, because this is a Python template!

const webpack = require('webpack');

module.exports = (() => {
  // The basic config:
  const config = {
    entry: entryFilenames,
    output: {
        path: outputPath,
        filename: outputFilename
    },
    target: 'node',
    resolve: {
        root: resolveRoots,
        extensions: ['', '.js', '.json'],
        alias: resolveAliases
    },
    resolveLoader: {
        root: resolveRoots
    }
  };

  if (sourceMapConfig) {
    // Enable webpack's source map output:
    config.devtool = 'source-map';
    config.output.sourceMapFilename = sourceMapConfig.sourceMapFilename;
    config.output.devtoolModuleFilenameTemplate = '[resource-path]';
    config.output.devtoolFallbackModuleFilenameTemplate = '[resourcePath]?[hash]';
  }

  return config;
})();

module.exports.plugins = (() => {
  const plugins = [
    // Returns a non-zero exit code when webpack reports an error:
    require('webpack-fail-plugin'),

    // Includes _message_keys_wrapper in every build to mimic old loader.js:
    new webpack.ProvidePlugin({ require: '_message_key_wrapper' })
  ];

  if (isSandbox) {
    // Prevents using `require('evil_loader!mymodule')` to execute custom
    // loader code during the webpack build.
    const RestrictResourcePlugin = require('restrict-resource-webpack-plugin');
    const plugin = new RestrictResourcePlugin(/!+/,
      'Custom inline loaders are not permitted.');
    plugins.push(plugin);
  }

  return plugins;
})();

module.exports.module = {
  loaders: (() => {
    const loaders = [{'test': /\.json$/, 'loader': 'json-loader'}];

    if (isSandbox) {
      // See restricted-resource-loader.js, prevents loading files outside
      // of the project folder, i.e. `require(../../not_your_business)`:
      const restrictLoader = {
        'test': /^.*/, 'loader': 'restricted-resource-loader'
      };
      loaders.push(restrictLoader);
    }

    return loaders;
  })()
};

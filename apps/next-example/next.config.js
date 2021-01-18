/* eslint-disable @typescript-eslint/no-var-requires */
const withNx = require('@nrwl/next/plugins/with-nx');
const moduleAlias = require("module-alias");
moduleAlias.addAliases({
  "react-native": require.resolve("react-native-web"),
});
moduleAlias();

module.exports = withNx({
  webpack: (config) => {

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'react-native$': 'react-native-web',
        '/Users/tom/repos/tocalvo/react-monorepo-cache/node_modules/react-native/index.js': '/Users/tom/repos/tocalvo/react-monorepo-cache/node_modules/react-native-web/dist/index.js',
      },
    }
    //console.log('configPrint', config)
    return config
  }
});

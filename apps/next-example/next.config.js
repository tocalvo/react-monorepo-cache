/* eslint-disable @typescript-eslint/no-var-requires */

// with this works nice

// const moduleAlias = require("module-alias");
// moduleAlias.addAliases({
//   "react-native": require.resolve("react-native-web"),
// });
// moduleAlias();

const withNx = require('@nrwl/next/plugins/with-nx');

module.exports = withNx({
  webpack: (config) => {

    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'react-native$': 'react-native-web',
        'styled-components/native': 'styled-components',
      },
    }
    return config
  }
});

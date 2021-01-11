const { withNxMetro } = require('@nrwl/react-native');
// module.exports = withNxMetro(
//   {
//     transformer: {
//       getTransformOptions: async () => ({
//         transform: {
//           experimentalImportSupport: false,
//           inlineRequires: false,
//         },
//       }),
//     },
//   },
//   {
//     // Change this to true to see debugging info.
//     // Useful if you have issues resolving modules
//     debug: false,
//   }
// );

const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();
  return withNxMetro({
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  });
})();

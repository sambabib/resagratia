module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          {
            test: /\.wasm$/,
            type: 'javascript/auto',
          },
        ],
      },
      resolve: {
        // ... rest of the resolve config
        extensions: ['.ts', '.js'],
        fallback: {
          path: require.resolve('path-browserify'),
          path: require.resolve('buffer/'),
          path: require.resolve('stream-browserify'),
          fs: false,
          crypto: false
        },
      },
      // node: { fs: 'empty', global: true, __filename: true, __dirname: true },zzzzzzzzc
    },
  },
};

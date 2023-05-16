module.exports = (api) => {
  api.cache(true);

  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-transform-runtime',
      ['@babel/plugin-proposal-class-properties', { loose: true }],
    ],
    env: {
      test: {
        plugins: ['@babel/plugin-transform-modules-commonjs'],
        presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
      },
    },
  };
};

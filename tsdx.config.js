const images = require('@rollup/plugin-image');
const files = require('rollup-plugin-import-file');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      files({
        output: 'dist/assets/files',
        extensions: /\.(mp3|ogg)$/,
      }),
      images({ include: ['**/*.png', '**/*.jpg'] }),
      ...config.plugins,
    ];

    return config;
  },
};

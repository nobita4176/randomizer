module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'らんだまいざ',
    }
  },
  css: {
    sourceMap: true,
  },
  pwa: {
    name: 'らんだまいざ',
    themeColor: '#ca9ebb',
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: null,
      appleTouchIcon: null,
      maskIcon: null,
      msTileImage: null,
    },
    manifestOptions: {
      orientation: 'landscape',
      background_color: '#ffffff',
      icons: [
        {
          src: 'favicon.png',
          sizes: '256x256',
        },
      ]
    },
  },
};

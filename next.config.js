const sourcebit = require('sourcebit');

const sourcebitConfig = require('./sourcebit.js');



sourcebit.fetch(sourcebitConfig);

module.exports = {
    trailingSlash: true,
    devIndicators: {
        autoPrerender: false
    },
    webpack: (config, { webpack }) => {
        // Tell webpack to ignore watching content files in the content folder.
        // Otherwise webpack receompiles the app and refreshes the whole page.
        // Instead, the src/pages/[...slug].js uses the "withRemoteDataUpdates"
        // function to update the content on the page without refreshing the
        // whole page
        config.plugins.push(new webpack.WatchIgnorePlugin([[/\/content\//]]));
        return config;
    }
};

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
       // for webpack 5 use
       // { and: [/\.(js|ts)x?$/] }
      },
      
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

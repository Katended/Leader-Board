const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devconfig = {
  mode: 'development',
};

module.exports = merge(commonConfig, devconfig);
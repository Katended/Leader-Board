const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const prodconfig = {
  mode: 'production',
};
module.exports = merge(commonConfig, prodconfig);
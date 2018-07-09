const webpackCommonConfig = require('webpack-config-clay');

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayBadge.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-badge.js',
	}),
});

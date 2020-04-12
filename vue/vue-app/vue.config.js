const path = require('path');

module.exports = {
    outputDir: path.resolve('..', '..', 'mind-calc'),
    publicPath: '/mind-calc',
    configureWebpack: {
        resolve: {
            alias: {
                '$src': path.resolve(__dirname, 'src'),
            }
        }
    }
}

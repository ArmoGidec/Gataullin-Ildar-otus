const path = require('path');

module.exports = {
    outputDir: path.resolve('..', '..', 'docs'),
    configureWebpack: {
        resolve: {
            alias: {
                '$src': path.resolve(__dirname, 'src'),
            }
        }
    }
}

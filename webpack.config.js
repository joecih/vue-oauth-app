var path = require('path')
var webpack = require('webpack')
var projectRoot = path.resolve(__dirname, './')

module.exports = {
    // the main entry of our app
    entry: ['./src/index.js', './src/auth/index.js'],
    // output configuration
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'vueoauth.js',
        library: 'Vueoauth',
        libraryTarget: 'umd'
    },

    module: {
        preLoaders: [{
            test: /\.vue$/,
            loader: 'eslint',
            include: projectRoot,
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            loader: 'eslint',
            include: projectRoot,
            exclude: /node_modules/
        }],
        loaders: [
            // process *.vue files using vue-loader
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            // process *.js files using babel-loader
            // the exclude pattern is important so that we don't
            // apply babel transform to all the dependencies!
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.css'],
        alias: {
            'vue$': 'vue/dist/vue'
        }
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
}
}
}
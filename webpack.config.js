const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

function getConfig() {

    return {
        entry: {
            tasks: './src/tasksApp/index.tsx',
            profile: './src/profileApp/index.tsx'
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        output: {
            path: path.join(__dirname, '/build'),
            filename: "[name].[hash].bundle.js",
            chunkFilename: "[name].[contenthash].chunk.js",
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader',
                },
                {
                    test: /\.css$/,
                    use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                hash: true,
                title: 'Tasks page',
                template: './src/template/index.html',
                chunks: ['tasks'],
                filename: './tasks.html'
            }),
            new HtmlWebpackPlugin({
                hash: true,
                title: 'Profile page',
                template: './src/template/index.html',
                chunks: ['profile'],
                filename: './profile.html'
            })
        ],
        devServer: {
            historyApiFallback: true,
            contentBase: path.join(__dirname, "/build/"),
        },
        optimization: {
            // We no not want to minimize our code.
            minimize: true
        },
    };
}

module.exports = (env, args) => {
    return getConfig(args.mode);
};

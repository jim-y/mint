const path = require('path');

module.exports = {
    entry: "./src/mint.ts",
    output: {
        filename: 'mint.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"]
    },
    plugins: [],
    module: {
        rules: [
            { test: /\.html$/, loader: 'html-loader' },
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, use: ["ts-loader"], exclude: /node_modules/ },
        ]
    }
}
const path = require('path');

const buildFolder = `${__dirname}/dist`;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path:buildFolder,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'], 
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};

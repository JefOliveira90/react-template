const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    'app': './src/index.tsx'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}
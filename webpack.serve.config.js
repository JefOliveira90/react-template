const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Change the ID of the <div> to reflect the target element of your app.
      templateContent: `
        <html>
          <body>
            <div id='app'></div>
          </body>
        </html
      `
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 1738,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    }
  }
}
import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default merge(common, {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    port: 5173,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: false,
      hash: true,
    }),
  ],
})
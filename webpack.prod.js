import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default merge(common, {
  mode: 'production',
  devtool: 'hidden-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
      hash: true,
    }),
  ],
})

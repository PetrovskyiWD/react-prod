import { WebpackPluginInstance, ProgressPlugin, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { BuildOptions } from './types/config';

export default function({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash:8].css',
      chunkFilename: 'styles/[name].[contenthash:8].chunk.css'
    }),
    new DefinePlugin({
      __IS_DEV__: isDev
    })
  ]
}

import { WebpackPluginInstance, ProgressPlugin, DefinePlugin, HotModuleReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

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
    new HotModuleReplacementPlugin(),
    isDev && new ReactRefreshWebpackPlugin(),
    new DefinePlugin({
      __IS_DEV__: isDev
    }),
  ].filter(Boolean)
}

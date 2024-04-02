import { type Configuration } from 'webpack'

import type { BuildOptions } from './types/config'
import buildLoaders from './buildLoaders'
import buildResolves from './buildResolves'
import buildPlugins from './buildPlugins'
import buildDevServer from './buildDevServer'

export default function (options: BuildOptions): Configuration {
  const { mode, paths, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolves(options),
    plugins: buildPlugins(options)
  }
}

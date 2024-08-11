import { type RuleSetRule } from 'webpack'
import ReactRefreshTypeScript from 'react-refresh-typescript'

import { type BuildOptions } from './types/config'
import { buildStyleLoader } from './loaders/buildStyleLoader'

export default function ({ isDev }: BuildOptions): RuleSetRule[] {
  const typescriptLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: {
      loader: 'ts-loader',
      options: {
        getCustomTransformers: () => ({
          before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
        }),
        transpileOnly: isDev
      }
    },
    exclude: /node_modules/
  }

  const styleLoader: RuleSetRule = buildStyleLoader(isDev)

  const svgLoader: RuleSetRule = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  return [
    typescriptLoader,
    styleLoader,
    svgLoader
  ]
}

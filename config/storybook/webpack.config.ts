import path from 'path'
import { type RuleSetRule, type Configuration, DefinePlugin } from 'webpack'

import { type BuildPaths } from '../build/types/config'
import { buildStyleLoader } from '../build/loaders/buildStyleLoader'

export default ({ config }: { config: Configuration }): Configuration => {
  const paths: BuildPaths = {
    entry: '',
    html: '',
    output: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (config?.module) {
    config.module.rules = config.module.rules?.map((rule: RuleSetRule) => {
      // eslint-disable-next-line
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i }
      }

      return rule
    })
    config.module.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    config.module.rules?.push(buildStyleLoader(true))
  }

  config.plugins?.push(new DefinePlugin({ __IS_DEV__: true }))

  return config
}

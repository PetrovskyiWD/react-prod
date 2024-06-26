import { type Configuration } from 'webpack'
import path from 'path'
import 'webpack-dev-server'

import buildWebpackConfig from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'

export default (env: BuildEnv): Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const mode = env.mode ?? 'development'
  const isDev = mode === 'development'

  const PORT = env.port ?? 3000

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  })
}

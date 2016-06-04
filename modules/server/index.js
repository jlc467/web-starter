/*eslint-disable no-console*/
import morgan from 'morgan'
import express from 'express'
import devErrorHandler from 'errorhandler'
import WebpackDevServer from 'webpack-dev-server'
import { staticAssets, devAssets, createDevCompiler } from './AssetsUtils'
import { sendHomePage } from './MainController'

export const createRouter = () => {
  const router = express.Router()
  router.get('*', sendHomePage)
  return router
}

const errorHandler = (err, req, res, next) => {
  res.status(500).send('<p>Internal Server Error</p>')
  console.error(err.stack)
  next(err)
}

export const createServer = (config) => {
  const app = express()

  app.disable('x-powered-by')
  app.use(errorHandler)
  app.use(express.static(config.publicDir))
  app.use(staticAssets(config.statsFile))
  app.use(createRouter(config))

  return app
}

export const createDevServer = (config) => {
  const webpackConfig = config.webpackConfig
  const compiler = createDevCompiler(
    webpackConfig,
    `webpack-dev-server/client?http://localhost:${config.port}`
  )

  const server = new WebpackDevServer(compiler, {
    // webpack-dev-middleware options.
    publicPath: webpackConfig.output.publicPath,
    quiet: false,
    noInfo: false,
    stats: {
      // https://webpack.github.io/docs/node.js-api.html#stats-tojson
      assets: true,
      colors: true,
      version: true,
      hash: true,
      timings: true,
      chunks: false
    },

    // webpack-dev-server options.
    contentBase: false,
    setup(app) {
      // This runs before webpack-dev-middleware.
      app.disable('x-powered-by')
      app.use(morgan('dev'))
    }
  })

  // This runs after webpack-dev-middleware.
  server.use(devErrorHandler())
  server.use(express.static(config.publicDir))
  server.use(devAssets(compiler))
  server.use(createRouter(config))

  return server
}

/*eslint-disable no-console*/
const path = require('path')
const { createServer, createDevServer } = require('./index')

const port = process.env.PORT || 5000
const webpackConfig = require('../../webpack.config')
const statsFile = path.resolve(__dirname, '../../stats.json')
const publicDir = path.resolve(__dirname, '../../public')

const serverConfig = {
  port,
  webpackConfig,
  statsFile,
  publicDir
}

const server = process.env.NODE_ENV === 'production'
  ? createServer(serverConfig)
  : createDevServer(serverConfig)

server.listen(port, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', port)
})

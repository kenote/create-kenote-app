import * as http from 'http'
import * as express from 'express'
import * as next from 'next'
import * as bodyParser from 'body-parser'
import * as methodOverride from 'method-override'
import * as compress from 'compression'
import pages from './routes/pages'
import apiV1 from './routes/api_v1'
import config from './config'

const dev: boolean = process.env.NODE_ENV !== 'production'
const nextServer: next.Server = next({ dev })
const nextHandle: Function = pages.getRequestHandler(nextServer)
const app: any = express()
const { HOST, PORT } = config

nextServer.prepare()
  .then(() => {
    app.use((<any>bodyParser).json({ limit: '1mb' }))
    app.use((<any>bodyParser).urlencoded({ extended: true, limit: '1mb' }))
    app.use(methodOverride())
    app.use(compress())
    // Routes
    app.use('/api/v1', apiV1)
    app.use(nextHandle)
    // Server ...
    let server: http.Server = http.createServer(app)
    server.listen(PORT, HOST, (err) => {
      if (err) throw err
      console.log(`Service running in %s environment, PORT: %d ...`, process.env.NODE_ENV || 'development', PORT)
    })
  })

  
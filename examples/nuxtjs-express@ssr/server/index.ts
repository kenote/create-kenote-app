import * as http from 'http'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as methodOverride from 'method-override'
import * as compress from 'compression'
import { Nuxt, Builder } from 'nuxt'
import apiV1 from './routes/api_v1'

import config from './config'
import nuxtConfig from '../nuxt.config'

const dev: boolean = process.env.NODE_ENV !== 'production'
const nuxt: any = new Nuxt({ ...nuxtConfig, dev })
const app: express.Express = express()
const { HOST, PORT } = config

if (process.env.NODE_ENV === 'development') {
  let builder: any = new Builder(nuxt)
  builder.build()
}

app.use((<any>bodyParser).json({ limit: '1mb' }))
app.use((<any>bodyParser).urlencoded({ extended: true, limit: '1mb' }))
app.use(methodOverride())
app.use(compress())

app.use('/api/v1', apiV1)
app.use(nuxt.render)

let server: http.Server = http.createServer(app)
server.listen(PORT, HOST, (err: Error): void => {
  if (err) throw err
  console.log(`Service running in %s environment, PORT: %d ...`, process.env.NODE_ENV || 'development', PORT)
})
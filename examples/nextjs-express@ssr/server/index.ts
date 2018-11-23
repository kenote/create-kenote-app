
import * as express from 'express'
import * as next from 'next'
import pages from './routes/pages'
import apiV1 from './routes/api_v1'

const port: number = parseInt(process.env.PORT, 10) || 3000
const dev: boolean = process.env.NODE_ENV !== 'production'
const app: next.Server = next({ dev })
const handle: Function = pages.getRequestHandler(app)
const server: AppServer = express()

interface AppServer extends Function {
  use?: Function
  listen?: Function
}

app.prepare()
  .then(() => {
    server.use('/api/v1', apiV1)
    server.use(handle)

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })

  
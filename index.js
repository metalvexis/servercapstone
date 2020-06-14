import './startup.js'
import { getPgClient } from './db/pgClient.js'
import expressApp from 'config/express.js'
import listEndpoints from 'express-list-endpoints'

getPgClient()
  .then(client => {
    global.pgClient = client
  })
  .catch(err => {
    global.logger.err(err.stack)
    process.exit(-1)
  })
expressApp.start()
  .then(res => {
    console.table(listEndpoints(res))
  })
  .catch(err => {
    global.logger.err(err.stack)
  })

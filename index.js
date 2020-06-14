import './startup.js'
import { getPgClient } from './db/pgClient.js'

global.pgClient = getPgClient()

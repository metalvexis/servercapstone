/**
 *    Use this client only for raw SQL Queries
 *    use sequelizeClient for all other DB tasks
 */

import { Client } from 'pg'

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
})

client.on('error', err => {
  global.logger.err('PgClient failed!', err.stack)
})

client.on('end', () => {
  global.logger.info('PgClient disconnected')
})

let isConnected = false

export async function getPgClient () {
  if (!isConnected) {
    try {
      await client.connect()
      isConnected = true
      global.logger.info('DB Connected')
    } catch (err) {
      global.logger.err(err.stack)
    }
  }
  return client
}

// Loads .env to Environment without being added to server code
import dotenv from 'dotenv'
import './helper/crashHandler.js'
import './helper/logger.js'

const config = dotenv.config()

if (process.env.NODE_ENV !== 'production') {
  console.log(config.parsed)
}

import { Logger } from 'helper/logger.js'

const logger = new Logger({ service: 'stonecap', module: 'error-tracker' })

// use this Error class for App specific errors
export class StoneError extends Error {
  constructor (statusCode, message) {
    super()
    this.statusCode = statusCode
    this.message = message
  }
}

export const errorHandler = (err, req, res, next) => {
  const { statusCode, message, stack } = err

  const status = statusCode || 500

  logger.err(stack)

  res.status(status).json({
    status: 'error',
    statusCode,
    message
  })
}

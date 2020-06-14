/*
  Cleanup tasks before process exit
  Source: https://stackoverflow.com/questions/14031763/doing-a-cleanup-action-just-before-node-js-exits
*/
process.stdin.resume()// so the program will not close instantly

function exitHandler (options, exitCode) {
  // if (options.cleanup) console.log('clean')
  if (exitCode || exitCode === 0) global.logger.info(`ExitCode: ${exitCode}`)

  global.pgClient.end()
    .then(() => global.logger.info('pgClient disconnected'))
    .catch(err => global.logger.err('error during disconnection', err.stack))

  if (options.exit) process.exit()
}

// do something when app is closing
process.on('exit', exitHandler.bind(null, { cleanup: true }))

// catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, { exit: true }))

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, { exit: true }))
process.on('SIGUSR2', exitHandler.bind(null, { exit: true }))

// catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, { exit: true }))

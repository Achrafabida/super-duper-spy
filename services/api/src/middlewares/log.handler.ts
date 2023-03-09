import { pinoHttp } from 'pino-http'

export const logger = pinoHttp({
  transport: {
    target: 'pino-http-print',
    options: {
      destination: 1, // optional (default stdout)
      all: true,
      colorize: true,
      translateTime: true
    }
  }
})

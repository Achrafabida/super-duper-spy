import { type Express } from 'express'
import { errorConverter, exceptionHandler } from './middlewares/error.middlewares'
import { logger } from './middlewares/log.middlewares'
import { MainRouter } from './router'
export function init (app: Express): void {
  app.use(logger)

  app.use(MainRouter)

  app.use(errorConverter)
  app.use(exceptionHandler)
}

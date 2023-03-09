import { type Express } from 'express'
import { exceptionHandler } from './middlewares/error.handler'
import { logger } from './middlewares/log.handler'
import { MainRouter } from './router'
export function init (app: Express): void {
  app.use(logger)

  app.use(MainRouter)

  app.use(exceptionHandler)
}

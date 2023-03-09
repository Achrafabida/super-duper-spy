import type { Request, Response, NextFunction } from 'express'
import { type AppError } from '~/types/appError'

export const exceptionHandler = (
  error: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.header('Content-Type', 'application/json')
  if (error) {
    const status = error.statusCode || 500
    res.status(status).send(error)
    req.log.error(error)
  }
  next()
}

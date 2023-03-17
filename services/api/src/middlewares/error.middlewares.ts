import { PrismaClientInitializationError } from '@prisma/client/runtime/library'
import type { Request, Response, NextFunction } from 'express'
import httpStatus from 'http-status'
import { ApiError } from '~/types/apiError'

export const exceptionHandler = (
  error: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.header('Content-Type', 'application/json')
  if (error) {
    const status = error.statusCode || 500
    res.status(status).send({
      statusCode: error.statusCode,
      message: error.message
    })
    req.log.error(error)
  }
  next()
}

export const errorConverter = (
  err: ApiError | Error,
  req: Request,
  res: Response,
  next: NextFunction): void => {
  let error = err
  if (!(error instanceof ApiError)) {
    const statusCode =
      error instanceof PrismaClientInitializationError ? httpStatus.BAD_REQUEST : httpStatus.INTERNAL_SERVER_ERROR
    const message = error.message || httpStatus[statusCode]
    error = new ApiError(statusCode, message, err.stack)
  }
  next(error)
}

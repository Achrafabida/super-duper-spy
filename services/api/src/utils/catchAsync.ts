import { type NextFunction, type Request, type Response } from 'express'

type ControllerFunction = (req: Request, res: Response, next: NextFunction) => Promise<void> | void

export function catchAsync (fn: ControllerFunction) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => { next(err) })
  }
}

import { type NextFunction, type Request, type Response } from 'express'

export default function (req: Request, res: Response, next: NextFunction): void {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now()
  }
  res.send(healthcheck)
}

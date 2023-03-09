import { Router } from 'express'
import UsersRouter from '~/resources/users/users.controller'
import { AppError } from './types/appError'
import healthcheck from './resources/healthcheck'
const MainRouter = Router()
MainRouter.use('/users', UsersRouter)
MainRouter.get('/healthcheck', healthcheck)
MainRouter.get('/', (req, res, next) => {
  setTimeout(() => {
    try {
      throw new AppError(500, 'Test ERRRRR')
    } catch (error) {
      next(error)
    }
  }, 1000)
})

export { MainRouter }

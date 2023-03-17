import { Router } from 'express'
import UsersRouter from '~/resources/users/users.controller'
import healthcheck from '~/resources/healthcheck'
const MainRouter = Router()
MainRouter.use('/users', UsersRouter)
MainRouter.get('/healthcheck', healthcheck)

export { MainRouter }

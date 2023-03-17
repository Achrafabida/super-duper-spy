import { Router } from 'express'
import { catchAsync } from '~/utils/catchAsync'

const router = Router()
router.get('/', catchAsync((req, res, next) => {
  res.send('Users')
})
)
export default router

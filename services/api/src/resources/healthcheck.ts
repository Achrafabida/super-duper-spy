import { catchAsync } from '~/utils/catchAsync'
import prisma from '~/utils/prisma'

export default catchAsync(async (_req, res, _next) => {
  await prisma.$queryRaw`SELECT 1`
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now()
  }
  res.send(healthcheck)
})

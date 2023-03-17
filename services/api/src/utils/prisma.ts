import { PrismaClient } from '@prisma/client'
process.env.DATABASE_URL=`postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:5432/${process.env.POSTGRES_DATABASE}`
const prisma = new PrismaClient()
export default prisma

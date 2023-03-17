import express from 'express'
import { init } from './config'

const app = express()
init(app)
const port = process.env.PORT ?? 3000
app.listen(port, () => {
  console.log(`API is running http://0.0.0.0:${port}`)
})
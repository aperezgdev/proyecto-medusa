import 'dotenv'
import 'reflect-metadata'
import './dependency-injection/index.js'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { routes } from './routes/index.js'
import cookieParser from 'cookie-parser'

const app = express()
const PORT = 3001

const jsonParser = bodyParser.json()

app.use(jsonParser)
app.use(cors({
  origin: true,
  credentials: true
}))
app.use(cookieParser())
app.use(routes)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

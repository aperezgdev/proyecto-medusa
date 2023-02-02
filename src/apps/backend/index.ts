import express from 'express'
import cors from 'cors'
import { MongoUserRepository } from '../../User/infrastructure/MongoUserRepository.js'
import bodyParser from 'body-parser'
import { MongoClient } from 'mongodb'
import { UserCreator } from '../../User/application/UserCreator.js'
import { UserPostController } from './controller/UserPostController.js'
import { UserPostAuthController } from './controller/UserPostAuthController.js'
import { UserAuth } from '../../User/application/UserAuth.js'

const app = express()
const PORT = 3001

const jsonParser = bodyParser.json()
const client = new MongoClient('mongodb://127.0.0.1:27017/proyecto-medusa')
const mongoUserRepository = new MongoUserRepository(client.connect())
const userAuth = new UserAuth(mongoUserRepository)
const userPostAuthController = new UserPostAuthController(userAuth)
const userCreator = new UserCreator(mongoUserRepository)
const userPostController = new UserPostController(userCreator)

app.use(cors())

app.post('/auth', jsonParser, async (req, res) => {
  try {
    await userPostAuthController.run(req, res)
  } catch (err) {
    console.log(err)
  }
})

app.post('/user', jsonParser, async (req, res) => {
  try {
    await userPostController.run(req, res)
  } catch (err) {
    console.log(err)
  }
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

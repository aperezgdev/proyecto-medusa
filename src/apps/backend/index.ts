import express from 'express'
import cors from 'cors'
import { MongoUserRepository } from '../../User/infrastructure/MongoUserRepository.js'
import bodyParser from 'body-parser'
import { MongoClient } from 'mongodb'
import { UserGetController } from './controller/UserGetController.js'
import { UserFinder } from '../../User/domain/UserFinder.js'
import { UserCreator } from '../../User/application/UserCreator.js'
import { UserPostController } from './controller/UserPostController.js'

const app = express()
const PORT = 3001

const jsonParser = bodyParser.json()
const client = new MongoClient('mongodb://127.0.0.1:27017/proyecto-medusa')
const mongoUserRepository = new MongoUserRepository(client.connect())
const userFinder = new UserFinder(mongoUserRepository)
const userGetController = new UserGetController(userFinder)
const userCreator = new UserCreator(mongoUserRepository)
const userPostController = new UserPostController(userCreator)

app.use(cors())

app.get('/user/:id', async (req, res) => {
  try {
    await userGetController.run(req, res)
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

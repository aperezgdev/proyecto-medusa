
import express from 'express'
import { MongoUserRepository } from '../../User/infrastructure/MongoUserRepository.js'
import { MongoClient } from 'mongodb'
import { UserGetController } from './controller/UserGetController.js'
import { UserFinder } from '../../User/domain/UserFinder.js'

const app = express()
const PORT = 3000

const client = new MongoClient('mongodb://127.0.0.1:27017/proyecto-medusa')
const mongoUserRepository = new MongoUserRepository(client.connect())
const userFinder = new UserFinder(mongoUserRepository)
const userGetController = new UserGetController(userFinder)

app.get('/user/:id', async (req, res) => {
  try {
    await userGetController.run(req, res)
  } catch (err) {
    console.log(err)
  }
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

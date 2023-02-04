import express from 'express'
import cors from 'cors'
import { MongoUserRepository } from '../../User/infrastructure/MongoUserRepository.js'
import bodyParser from 'body-parser'
import { MongoClient } from 'mongodb'
import { UserCreator } from '../../User/application/UserCreator.js'
import { UserPostController } from './controller/UserPostController.js'
import { UserPostAuthController } from './controller/UserPostAuthController.js'
import { UserAuth } from '../../User/application/UserAuth.js'
import { IngresosGetController } from './controller/IngresosGetControler.js'
import { MongoIngresoRepository } from '../../Ingreso/infrastructure/MongoIngresoRepository.js'
import { IngresosSelect } from '../../Ingreso/application/IngresoSelect.js'

const app = express()
const PORT = 3001

const jsonParser = bodyParser.json()
const client = new MongoClient('mongodb://127.0.0.1:27017/proyecto-medusa')
const dataBase = client.connect()
const mongoUserRepository = new MongoUserRepository(dataBase)
const mongoIngresoRepository = new MongoIngresoRepository(dataBase)
const userAuth = new UserAuth(mongoUserRepository)
const userPostAuthController = new UserPostAuthController(userAuth)
const userCreator = new UserCreator(mongoUserRepository)
const userPostController = new UserPostController(userCreator)
const ingresoSelect = new IngresosSelect(mongoIngresoRepository)
const ingresosGetController = new IngresosGetController(ingresoSelect)

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

app.get('/ingresos/:idUsuario', async (req, res) => {
  try {
    await ingresosGetController.run(req, res)
  } catch (err) {
    console.log(err)
  }
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

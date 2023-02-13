import { Router } from 'express'
import { container } from 'tsyringe'
import { authRefreshTokenController } from '../controller/AuthRefreshTokenController.js'
import { LogoutController } from '../controller/LogoutController.js'
import { UserPostAuthController } from '../controller/UserPostAuthController.js'
import { UserPostController } from '../controller/UserPostController.js'

export const userRouter = Router()

const userPostAuthController = container.resolve(UserPostAuthController)
const userPostController = container.resolve(UserPostController)
const logoutController = new LogoutController()

userRouter.post('/auth', async (req, res) => {
  try {
    await userPostAuthController.run(req, res)
  } catch (err) {
    console.log(err)
  }
})

userRouter.post('/user', async (req, res) => {
  try {
    await userPostController.run(req, res)
  } catch (err) {
    console.log(err)
  }
})

userRouter.post('/refresh', (req, res) => {
  authRefreshTokenController(req, res)
})

userRouter.post('/logout', (req, res) => {
  logoutController.run(req, res).catch((err) => {
    console.log(err)
    res.status(500).send({ error: 'Error al cerrar sesión' })
  })
})

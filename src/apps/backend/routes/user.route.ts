import { Router } from 'express'
import { container } from 'tsyringe'
import { UserPostAuthController } from '../controller/UserPostAuthController.js'
import { UserPostController } from '../controller/UserPostController.js'

export const userRouter = Router()

const userPostAuthController = container.resolve(UserPostAuthController)
const userPostController = container.resolve(UserPostController)

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

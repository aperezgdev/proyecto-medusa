import { Router } from 'express'
import { ingresoRouter } from './ingreso.route.js'
import { userRouter } from './user.route.js'

export const routes = Router()
routes.use(userRouter)
routes.use(ingresoRouter)

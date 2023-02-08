import { Router } from 'express'
import { container } from 'tsyringe'
import { IngresosDeleteController } from '../controller/IngresosDeleteController.js'
import { IngresosGetController } from '../controller/IngresosGetControler.js'
import { auth } from '../middleware/auth.js'

export const ingresoRouter = Router()

const ingresosGetController = container.resolve(IngresosGetController)
const ingresosDeleteController = container.resolve(IngresosDeleteController)

ingresoRouter.use(auth)
ingresoRouter.get('/ingresos', async (req, res) => {
  try {
    await ingresosGetController.run(req, res)
  } catch (err) {
    console.log(err)
  }
})
ingresoRouter.delete('/ingresos', async (req, res) => {
  try {
    await ingresosDeleteController.run(req, res)
  } catch (err) {
    console.log(err)
  }
})

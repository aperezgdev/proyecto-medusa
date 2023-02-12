import { Router } from 'express'
import { container } from 'tsyringe'
import { IngresosDeleteController } from '../controller/IngresosDeleteController.js'
import { IngresosGetController } from '../controller/IngresosGetControler.js'
import { auth } from '../middleware/auth.js'

export const ingresoRouter = Router()

const ingresosGetController = container.resolve(IngresosGetController)
const ingresosDeleteController = container.resolve(IngresosDeleteController)

ingresoRouter.get('/ingresos', auth, async (req, res) => {
  try {
    await ingresosGetController.run(req, res)
  } catch (err) {
    console.log(err)
  }
})
ingresoRouter.delete('/ingresos', auth, async (req, res) => {
  try {
    await ingresosDeleteController.run(req, res)
  } catch (err) {
    console.log(err)
  }
})

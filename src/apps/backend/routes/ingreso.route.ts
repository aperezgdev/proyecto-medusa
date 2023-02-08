import { Router } from 'express'
import { container } from 'tsyringe'
import { IngresosGetController } from '../controller/IngresosGetControler.js'
import { auth } from '../middleware/auth.js'

export const ingresoRouter = Router()

const ingresosGetController = container.resolve(IngresosGetController)

ingresoRouter.use(auth)
ingresoRouter.get('/ingresos', async (req, res) => {
  try {
    await ingresosGetController.run(req, res)
  } catch (err) {
    console.log(err)
  }
})

import { Router } from 'express'
import { container } from 'tsyringe'
import { IngresosGetController } from '../controller/IngresosGetControler.js'

export const ingresoRouter = Router()

const ingresosGetController = container.resolve(IngresosGetController)

ingresoRouter.get('/ingresos/:idUsuario', async (req, res) => {
  try {
    await ingresosGetController.run(req, res)
  } catch (err) {
    console.log(err)
  }
})

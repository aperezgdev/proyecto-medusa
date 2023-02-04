import { type Controller } from './Controller'
import { type Request, type Response } from 'express'
import { type IngresosSelect } from '../../../Ingreso/application/IngresoSelect'
import { UserId } from '../../../User/domain/UserId.js'

export class IngresosGetController implements Controller {
  constructor(private readonly ingresoSelect: IngresosSelect) {}

  async run(req: Request, res: Response) {
    const idUsuario = req.params.idUsuario
    const ingresos = await this.ingresoSelect.run(new UserId(idUsuario))
    console.log(ingresos)
    res.send(ingresos)
  }
}

import { type Controller } from './Controller'
import { type Request, type Response } from 'express'
import { type IngresosSelect } from '../../../Ingreso/application/IngresoSelect'
import { UserId } from '../../../User/domain/UserId.js'
import { inject, singleton } from 'tsyringe'

@singleton()
export class IngresosGetController implements Controller {
  constructor(@inject('IngresoSelect') private readonly ingresoSelect: IngresosSelect) {}

  async run(req: Request, res: Response) {
    const idUsuario = res.locals.id
    const ingresos = await this.ingresoSelect.run(new UserId(idUsuario))
    res.send(ingresos)
  }
}

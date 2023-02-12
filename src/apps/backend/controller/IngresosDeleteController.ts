import { inject, singleton } from 'tsyringe'
import { type Request, type Response } from 'express'
import { IngresoId } from '../../../Ingreso/domain/IngresoId.js'
import { type Controller } from './Controller'
import { type IngresoDelete } from '../../../Ingreso/application/IngresoDelete.js'

@singleton()
export class IngresosDeleteController implements Controller {
  constructor(@inject('IngresoDelete') private readonly ingresoDelete: IngresoDelete) {}

  async run(req: Request, res: Response) {
    const { idIngreso } = req.body
    if (idIngreso != null) {
      await this.ingresoDelete.run(new IngresoId(idIngreso))
    }
    res.send(200)
  }
}

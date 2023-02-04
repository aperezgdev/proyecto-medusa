import { type Request, type Response } from 'express'
import { type Controller } from './Controller'
import { type ConceptoSelect } from '../../../Concepto/application/ConceptoSelect.js'
import { ConceptoId } from '../../../Concepto/domain/ConceptoId'

export class ConceptoGetController implements Controller {
  constructor(private readonly conceptoSelect: ConceptoSelect) {}

  async run(req: Request, res: Response) {
    const idConcepto = req.params.idConcepto
    const concepto = await this.conceptoSelect.run(new ConceptoId(idConcepto))
    res.send(concepto)
  }
}

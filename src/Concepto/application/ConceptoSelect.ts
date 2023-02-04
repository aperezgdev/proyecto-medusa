import { ConceptoIdCriteria } from '../domain/ConceptoIdCriteria.js'
import { type ConceptoId } from '../domain/ConceptoId.js'
import { type ConceptoRepository } from '../domain/ConceptoRepository.js'

export class ConceptoSelect {
  constructor(readonly conceptoRepository: ConceptoRepository) {}

  async run(idConcepto: ConceptoId) {
    const concepto = await this.conceptoRepository.matching(
      new ConceptoIdCriteria(idConcepto.value)
    )
    return concepto
  }
}

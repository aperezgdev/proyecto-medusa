import { type ConceptoId } from './ConceptoId.js'
import { ConceptoNoEncontradoError } from './ConceptoNoEncontradoError.js'
import { type ConceptoRepository } from './ConceptoRepository.js'
import { ConceptoIdCriteria } from './ConceptoIdCriteria.js'

export class ConceptoFinder {
  constructor(private readonly conceptoRepository: ConceptoRepository) {}

  async run(id: ConceptoId) {
    const concepto = await this.conceptoRepository.matching(new ConceptoIdCriteria(id.value))
    if (concepto == null) throw new ConceptoNoEncontradoError(id)
    return concepto
  }
}

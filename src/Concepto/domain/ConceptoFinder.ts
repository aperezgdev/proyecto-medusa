import { type ConceptoId } from './ConceptoId.js'
import { ConceptoNoEncontradoError } from './ConceptoNoEncontradoError.js'
import { type ConceptoRepository } from './ConceptoRepository.js'
import { ConceptoIdCriteria } from './ConceptoIdCriteria.js'

export class ConceptoFinder {
  constructor(private readonly conceptoRepository: ConceptoRepository) {}

  async run(id: ConceptoId) {
    const conceptos = await this.conceptoRepository.matching(new ConceptoIdCriteria(id.value))

    if (conceptos.length === 0) throw new ConceptoNoEncontradoError()
    const concepto = conceptos.at(0)
    if (concepto == null) throw new ConceptoNoEncontradoError()

    return concepto
  }
}

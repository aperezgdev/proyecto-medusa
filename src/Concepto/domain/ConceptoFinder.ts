import { type ConceptoId } from './ConceptoId'
import { ConceptoNotFoundError } from './ConceptoNotFoundError'
import { type ConceptoRepository } from './ConceptoRepository'

export class ConceptoFinder {
  constructor(private readonly conceptoRepository: ConceptoRepository) {}

  async run(conceptoId: ConceptoId) {
    const concepto = await this.conceptoRepository.findById(conceptoId)
    if (concepto == null) throw new ConceptoNotFoundError(conceptoId)
    return concepto
  }
}

import { type Criteria } from '../../Shared/domian/Criteria/Criteria.js'
import { MongoRepository } from '../../Shared/infrastructure/MongoRepository.js'
import { Concepto } from '../domain/Concepto.js'
import { type ConceptoRepository } from '../domain/ConceptoRepository.js'

interface ConceptoDocument {
  _id: string
  conceptoNombre: string
}

export class MongoConceptoRepository
  extends MongoRepository<Concepto>
  implements ConceptoRepository {
  protected collectionName(): string {
    return 'concepto'
  }

  async save(concepto: Concepto): Promise<void> {
    await this.persist(concepto.id.value, concepto)
  }

  async matching(criteria: Criteria): Promise<Concepto[]> {
    const concepto = await this.searchByCriteria<ConceptoDocument>(criteria)

    return concepto.map(({ _id, conceptoNombre }) => {
      return Concepto.fromPrimitives({ id: _id, conceptoNombre })
    })
  }
}

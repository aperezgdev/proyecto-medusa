import { type Concepto } from './Concepto'
import { type ConceptoId } from './ConceptoId'

export interface ConceptoRepository {
  findById: (conceptoId: ConceptoId) => Promise<Concepto>
}

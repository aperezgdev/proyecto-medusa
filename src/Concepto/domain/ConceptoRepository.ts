import { type Criteria } from '../../Shared/domian/Criteria/Criteria.js'
import { type Concepto } from './Concepto.js'

export interface ConceptoRepository {
  save: (concepto: Concepto) => Promise<void>
  matching: (criteria: Criteria) => Promise<Concepto[]>
}

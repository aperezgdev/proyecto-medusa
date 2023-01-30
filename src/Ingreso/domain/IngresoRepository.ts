import { type Criteria } from '../../Shared/domian/Criteria/Criteria'
import { type Ingreso } from './Ingreso'

export interface IngresoRepository {
  save: (ingreso: Ingreso) => Promise<void>
  matching: (criteria: Criteria) => Promise<Ingreso[]>
}

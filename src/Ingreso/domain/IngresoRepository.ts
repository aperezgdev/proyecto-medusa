import { type Criteria } from '../../Shared/domian/Criteria/Criteria'
import { type Ingreso } from './Ingreso'
import { type IngresoId } from './IngresoId'

export interface IngresoRepository {
  save: (ingreso: Ingreso) => Promise<void>
  matching: (criteria: Criteria) => Promise<Ingreso[]>
  delete: (idIngreso: IngresoId) => Promise<void>
}

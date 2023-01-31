import { type Cuenta } from './Cuenta'
import { type CuentaId } from './CuentaId'

export interface CuentaRepository {
  save: (cuenta: Cuenta) => Promise<void>
  findById: (cuentaId: CuentaId) => Promise<Cuenta>
}

import { type Cuenta } from './Cuenta'
import { type CuentaId } from './CuentaId'

export interface CuentaRepository {
  findById: (cuentaId: CuentaId) => Promise<Cuenta>
}

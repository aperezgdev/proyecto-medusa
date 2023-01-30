import { type CuentaId } from './CuentaId'

export class CuentaNotFoundError extends Error {
  constructor(cuentaId: CuentaId) {
    const errorMessage = `La cuenta con id ${cuentaId.value} no existe`
    super(errorMessage)
    this.name = CuentaNotFoundError.name
  }
}

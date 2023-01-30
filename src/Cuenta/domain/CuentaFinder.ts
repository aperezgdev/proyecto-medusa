import { type CuentaId } from './CuentaId'
import { CuentaNotFoundError } from './CuentaNotFoundError'
import { type CuentaRepository } from './CuentaRepository'

export class CuentaFinder {
  constructor(private readonly cuentaRepository: CuentaRepository) {}

  async run(cuentaId: CuentaId) {
    const cuenta = await this.cuentaRepository.findById(cuentaId)
    if (cuenta == null) throw new CuentaNotFoundError(cuentaId)
    return cuenta
  }
}

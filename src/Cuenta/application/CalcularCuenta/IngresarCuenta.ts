import { type IngresoCantidad } from '../../../Ingreso/domain/IngresoCantidad'
import { type CuentaFinder } from '../../domain/CuentaFinder'
import { type CuentaId } from '../../domain/CuentaId'
import { type CuentaRepository } from '../../domain/CuentaRepository'

export class IngresarCuenta {
  constructor(readonly cuentaRepository: CuentaRepository, readonly cuentaFinder: CuentaFinder) {}

  async run(id: CuentaId, ingreso: IngresoCantidad) {
    const cuenta = await this.cuentaFinder.run(id)
    cuenta.ingresar(ingreso)
    await this.cuentaRepository.save(cuenta)
  }
}

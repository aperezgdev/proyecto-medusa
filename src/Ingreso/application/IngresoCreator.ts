import { type ConceptoId } from '../../Concepto/domain/ConceptoId'
import { type CuentaFinder } from '../../Cuenta/domain/CuentaFinder'
import { type CuentaId } from '../../Cuenta/domain/CuentaId'
import { type UserId } from '../../User/domain/UserId'
import { Ingreso } from '../domain/Ingreso'
import { type IngresoCantidad } from '../domain/IngresoCantidad'
import { type IngresoFecha } from '../domain/IngresoFecha'
import { type IngresoRepository } from '../domain/IngresoRepository'

export class IngresoCreator {
  constructor(readonly ingresoRepository: IngresoRepository, readonly cuentaFinder: CuentaFinder) {}

  async run(
    cantidad: IngresoCantidad,
    idConcepto: ConceptoId,
    fecha: IngresoFecha,
    idCuenta: CuentaId,
    idUser: UserId
  ) {
    const cuenta = await this.cuentaFinder.run(idCuenta)
    const resultado = cuenta.calcularIngreso(cantidad)
    const ingreso = Ingreso.create(cantidad, idConcepto, fecha, idCuenta, resultado, idUser)
    await this.ingresoRepository.save(ingreso)
  }
}

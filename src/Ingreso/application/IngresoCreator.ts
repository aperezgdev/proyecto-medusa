import { type ConceptoFinder } from '../../Concepto/domain/ConceptoFinder'
import { type ConceptoId } from '../../Concepto/domain/ConceptoId'
import { type CuentaFinder } from '../../Cuenta/domain/CuentaFinder'
import { type CuentaId } from '../../Cuenta/domain/CuentaId'
import { type UserFinder } from '../../User/domain/UserFinder'
import { type UserId } from '../../User/domain/UserId'
import { Ingreso } from '../domain/Ingreso'
import { type IngresoCantidad } from '../domain/IngresoCantidad'
import { type IngresoFecha } from '../domain/IngresoFecha'
import { type IngresoRepository } from '../domain/IngresoRepository'

export class IngresoCreator {
  constructor(
    readonly ingresoRepository: IngresoRepository,
    readonly cuentaFinder: CuentaFinder,
    readonly conceptoFinder: ConceptoFinder,
    readonly userFinder: UserFinder
  ) {}

  async run(
    cantidad: IngresoCantidad,
    idConcepto: ConceptoId,
    fecha: IngresoFecha,
    idCuenta: CuentaId,
    idUser: UserId
  ) {
    const cuenta = await this.cuentaFinder.run(idCuenta)
    const user = await this.userFinder.run(idUser)
    const resultado = cuenta.calcularIngreso(cantidad)
    const concepto = await this.conceptoFinder.run(idConcepto)
    const ingreso = Ingreso.create(cantidad, concepto, fecha, cuenta, resultado, user)
    await this.ingresoRepository.save(ingreso)
  }
}

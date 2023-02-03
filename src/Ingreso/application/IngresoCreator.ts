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
    readonly conceptoFinder: ConceptoFinder,
    readonly userFinder: UserFinder,
    readonly cuentaFinder: CuentaFinder
  ) {}

  async run(
    cantidad: IngresoCantidad,
    idConcepto: ConceptoId,
    fecha: IngresoFecha,
    idCuenta: CuentaId,
    idUser: UserId
  ) {
    const concepto = await this.conceptoFinder.run(idConcepto)
    const cuenta = await this.cuentaFinder.run(idCuenta)
    const users = await this.userFinder.run(idUser)
    const user = users[0]
    const resultado = cuenta.calcularIngreso(cantidad)
    const ingreso = Ingreso.create(cantidad, concepto, fecha, cuenta, resultado, user)
    await this.ingresoRepository.save(ingreso)
  }
}

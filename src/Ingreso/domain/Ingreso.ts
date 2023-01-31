import { type Concepto } from '../../Concepto/domain/Concepto'
import { type Cuenta } from '../../Cuenta/domain/Cuenta'
import { Uuid } from '../../Shared/Uuid'
import { type User } from '../../User/domain/User'
import { type IngresoCantidad } from './IngresoCantidad'
import { type IngresoFecha } from './IngresoFecha'
import { type IngresoId } from './IngresoId'

export class Ingreso {
  readonly id: IngresoId
  readonly ingresoCantidad: IngresoCantidad
  readonly ingresoConcepto: Concepto
  readonly ingresoFecha: IngresoFecha
  readonly cuenta: Cuenta
  readonly user: User

  constructor(
    id: IngresoId,
    cantidad: IngresoCantidad,
    concepto: Concepto,
    fecha: IngresoFecha,
    cuenta: Cuenta,
    user: User
  ) {
    this.id = id
    this.ingresoCantidad = cantidad
    this.ingresoConcepto = concepto
    this.ingresoFecha = fecha
    this.cuenta = cuenta
    this.user = user
  }

  static create(
    cantidad: IngresoCantidad,
    concepto: Concepto,
    fecha: IngresoFecha,
    cuenta: Cuenta,
    user: User
  ) {
    return new Ingreso(Uuid.random(), cantidad, concepto, fecha, cuenta, user)
  }
}

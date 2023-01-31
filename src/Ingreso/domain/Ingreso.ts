import { type Concepto } from '../../Concepto/domain/Concepto'
import { type Cuenta } from '../../Cuenta/domain/Cuenta'
import { type CuentaCantidad } from '../../Cuenta/domain/CuentaCantidad'
import { AggregateRoot } from '../../Shared/domian/AggregateRoot'
import { Uuid } from '../../Shared/Uuid'
import { type User } from '../../User/domain/User'
import { type IngresoCantidad } from './IngresoCantidad'
import { type IngresoFecha } from './IngresoFecha'
import { type IngresoId } from './IngresoId'

export class Ingreso extends AggregateRoot {
  readonly id: IngresoId
  readonly ingresoCantidad: IngresoCantidad
  readonly ingresoConcepto: Concepto
  readonly ingresoFecha: IngresoFecha
  readonly cuenta: Cuenta
  readonly resultadoCuenta: CuentaCantidad
  readonly user: User

  constructor(
    id: IngresoId,
    cantidad: IngresoCantidad,
    concepto: Concepto,
    fecha: IngresoFecha,
    cuenta: Cuenta,
    resultado: CuentaCantidad,
    user: User
  ) {
    super()
    this.id = id
    this.ingresoCantidad = cantidad
    this.ingresoConcepto = concepto
    this.ingresoFecha = fecha
    this.cuenta = cuenta
    this.resultadoCuenta = resultado
    this.user = user
  }

  static create(
    cantidad: IngresoCantidad,
    concepto: Concepto,
    fecha: IngresoFecha,
    cuenta: Cuenta,
    resultado: CuentaCantidad,
    user: User
  ) {
    return new Ingreso(Uuid.random(), cantidad, concepto, fecha, cuenta, resultado, user)
  }

  toPrimitives() {
    return {
      id: this.id,
      cantidad: this.ingresoCantidad.value,
      concepto: this.ingresoConcepto.id,
      fecha: this.ingresoFecha.value,
      cuenta: this.cuenta.id.value,
      resultado: this.resultadoCuenta.value,
      user: this.user.id
    }
  }
}

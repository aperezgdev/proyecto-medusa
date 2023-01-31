import { type IngresoCantidad } from '../../Ingreso/domain/IngresoCantidad'
import { AggregateRoot } from '../../Shared/domian/AggregateRoot'
import { Uuid } from '../../Shared/Uuid'
import { type User } from '../../User/domain/User'
import { type CuentaCantidad } from './CuentaCantidad'
import { type CuentaId } from './CuentaId'

export class Cuenta extends AggregateRoot {
  readonly id: CuentaId
  private cuentaCantidad: CuentaCantidad
  readonly user: User

  constructor(id: CuentaId, cuentaCantidad: CuentaCantidad, user: User) {
    super()
    this.id = id
    this.cuentaCantidad = cuentaCantidad
    this.user = user
  }

  static create(cantidad: CuentaCantidad, user: User) {
    return new Cuenta(Uuid.random(), cantidad, user)
  }

  ingresar(ingresoCantidad: IngresoCantidad) {
    this.cuentaCantidad = this.cuentaCantidad.ingresar(ingresoCantidad.value)
  }

  calcularIngreso(ingresoCantidad: IngresoCantidad) {
    return this.cuentaCantidad.ingresar(ingresoCantidad.value)
  }

  toPrimitives() {
    return {
      id: this.id.value,
      cantidad: this.cuentaCantidad.value,
      user: this.user.id.value
    }
  }
}

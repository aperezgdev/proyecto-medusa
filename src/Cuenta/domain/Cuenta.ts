import { type IngresoCantidad } from '../../Ingreso/domain/IngresoCantidad.js'
import { AggregateRoot } from '../../Shared/domian/AggregateRoot.js'
import { Uuid } from '../../Shared/Uuid.js'
import { User } from '../../User/domain/User.js'
import { CuentaCantidad } from './CuentaCantidad.js'
import { CuentaId } from './CuentaId.js'

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

  static fromPrimitives(primitives: {
    id: string
    cuentaCantidad: number
    user: {
      id: string
      usuario: string
      nombre: string
      apellido: string
      oficio: string
      contrasena: string
    }
  }) {
    return new Cuenta(
      new CuentaId(primitives.id),
      new CuentaCantidad(primitives.cuentaCantidad),
      User.fromPrimitives(primitives.user)
    )
  }
}

import { Concepto } from '../../Concepto/domain/Concepto.js'
import { Cuenta } from '../../Cuenta/domain/Cuenta.js'
import { CuentaCantidad } from '../../Cuenta/domain/CuentaCantidad.js'
import { AggregateRoot } from '../../Shared/domian/AggregateRoot.js'
import { Uuid } from '../../Shared/Uuid.js'
import { User } from '../../User/domain/User.js'
import { IngresoCantidad } from './IngresoCantidad.js'
import { IngresoFecha } from './IngresoFecha.js'
import { IngresoId } from './IngresoId.js'
import { IngresoLocalidad } from './IngresoLocalidad.js'
import { IngresoObservacion } from './IngresoObservacion.js'

export class Ingreso extends AggregateRoot {
  readonly id: IngresoId
  readonly ingresoCantidad: IngresoCantidad
  readonly ingresoConcepto: Concepto
  readonly ingresoFecha: IngresoFecha
  readonly ingresoObservacion: IngresoObservacion
  readonly ingresoLocalidad: IngresoLocalidad
  readonly cuenta: Cuenta
  readonly resultadoCuenta: CuentaCantidad
  readonly user: User

  constructor(
    id: IngresoId,
    cantidad: IngresoCantidad,
    concepto: Concepto,
    fecha: IngresoFecha,
    observacion: IngresoObservacion,
    localidad: IngresoLocalidad,
    cuenta: Cuenta,
    resultado: CuentaCantidad,
    user: User
  ) {
    super()
    this.id = id
    this.ingresoCantidad = cantidad
    this.ingresoConcepto = concepto
    this.ingresoFecha = fecha
    this.ingresoObservacion = observacion
    this.ingresoLocalidad = localidad
    this.cuenta = cuenta
    this.resultadoCuenta = resultado
    this.user = user
  }

  static create(
    cantidad: IngresoCantidad,
    concepto: Concepto,
    fecha: IngresoFecha,
    observacion: IngresoObservacion,
    localidad: IngresoLocalidad,
    cuenta: Cuenta,
    resultado: CuentaCantidad,
    user: User
  ) {
    return new Ingreso(Uuid.random(), cantidad, concepto, fecha, observacion, localidad, cuenta, resultado, user)
  }

  toPrimitives() {
    return {
      id: this.id,
      cantidad: this.ingresoCantidad.value,
      concepto: this.ingresoConcepto.toPrimitives(),
      fecha: this.ingresoFecha.value,
      observacion: this.ingresoObservacion.value,
      localidad: this.ingresoLocalidad.value,
      cuenta: this.cuenta.toPrimitives(),
      resultado: this.resultadoCuenta.value,
      user: this.user.toPrimitives()
    }
  }

  static fromPrimitives(primitives: {
    id: string
    ingresoCantidad: number
    ingresoConcepto: { id: string, conceptoNombre: string }
    ingresoFecha: Date
    ingresoObservacion: string
    ingresoLocalidad: string
    cuenta: {
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
    }
    resultadoCuenta: number
    user: {
      id: string
      usuario: string
      nombre: string
      apellido: string
      oficio: string
      contrasena: string
    }
  }) {
    return new Ingreso(
      new IngresoId(primitives.id),
      new IngresoCantidad(primitives.ingresoCantidad),
      Concepto.fromPrimitives(primitives.ingresoConcepto),
      new IngresoFecha(primitives.ingresoFecha),
      new IngresoObservacion(primitives.ingresoObservacion),
      new IngresoLocalidad(primitives.ingresoLocalidad),
      Cuenta.fromPrimitives(primitives.cuenta),
      new CuentaCantidad(primitives.resultadoCuenta),
      User.fromPrimitives(primitives.user)
    )
  }
}

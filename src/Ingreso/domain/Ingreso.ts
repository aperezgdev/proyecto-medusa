import { type Concepto } from '../../Concepto/domain/Concepto'
import { type Cuenta } from '../../Cuenta/domain/Cuenta'
import { Uuid } from '../../Shared/Uuid'
import { type IngresoCantidad } from './IngresoCantidad'
import { type IngresoFecha } from './IngresoFecha'
import { type IngresoId } from './IngresoId'

export class Ingreso {
  readonly id: IngresoId
  readonly ingresoCantidad: IngresoCantidad
  readonly ingresoConcepto: Concepto
  readonly ingresoFecha: IngresoFecha
  readonly cuenta: Cuenta

  constructor(
    id: IngresoId,
    cantidad: IngresoCantidad,
    concepto: Concepto,
    fecha: IngresoFecha,
    cuenta: Cuenta
  ) {
    this.id = id
    this.ingresoCantidad = cantidad
    this.ingresoConcepto = concepto
    this.ingresoFecha = fecha
    this.cuenta = cuenta
  }

  static create(
    cantidad: IngresoCantidad,
    concepto: Concepto,
    fecha: IngresoFecha,
    cuenta: Cuenta
  ) {
    return new Ingreso(Uuid.random(), cantidad, concepto, fecha, cuenta)
  }
}

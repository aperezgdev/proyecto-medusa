import { NumberValueObject } from '../../Shared/value-objects/NumberValueObject'

export class CuentaCantidad extends NumberValueObject {
  ingresar(value: number) {
    return new CuentaCantidad(value)
  }
}

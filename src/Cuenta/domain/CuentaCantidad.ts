import { NumberValueObject } from '../../Shared/value-objects/NumberValueObject.js'

export class CuentaCantidad extends NumberValueObject {
  ingresar(value: number) {
    return new CuentaCantidad(value)
  }
}

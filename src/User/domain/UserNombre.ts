import { StringValueObject } from '../../Shared/value-objects/StringValueObject.js'
import { UserNombreNoValido } from './UserNombreNoValido.js'

export class UserNombre extends StringValueObject {
  constructor(value: string) {
    super(value)
    this.ensureNombreIsLargerThan8(value)
    this.ensureNombreIsNotANumber(value)
  }

  protected ensureNombreIsLargerThan8(value: string) {
    if (value?.length < 3) {
      throw new UserNombreNoValido(
        'El nombre del usuario es demasiado corto, se necesitan por lo menos 3 caracteres'
      )
    }
  }

  protected ensureNombreIsNotANumber(value: string) {
    const regexNumber = /[0-9]/
    const containsNumber = regexNumber.test(value)
    if (containsNumber) {
      throw new UserNombreNoValido('El nombre del usuario no puede contener números')
    }
  }
}

import { type UserId } from './UserId'

export class UserNoEncontradoError extends Error {
  constructor(id: UserId) {
    const errorMessage = `El concepto con id ${id.value} no existe`
    super(errorMessage)
    this.name = UserNoEncontradoError.name
  }
}

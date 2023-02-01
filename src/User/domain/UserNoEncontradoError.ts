import { type UserId } from './UserId.js'

export class UserNoEncontradoError extends Error {
  constructor(id: UserId) {
    const errorMessage = `El usuario con id ${id.value} no existe`
    super(errorMessage)
    this.name = UserNoEncontradoError.name
  }
}

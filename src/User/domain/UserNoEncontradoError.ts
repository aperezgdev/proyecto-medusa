export class UserNoEncontradoError extends Error {
  constructor() {
    const errorMessage = 'El usuario no existe'
    super(errorMessage)
    this.name = UserNoEncontradoError.name
  }
}

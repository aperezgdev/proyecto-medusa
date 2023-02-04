export class UserYaExisteError extends Error {
  constructor() {
    super('Ya existe un usuario con ese nombre')
    this.name = UserYaExisteError.name
  }
}

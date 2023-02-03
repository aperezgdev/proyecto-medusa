import { UserAuthCriteria } from '../domain/UserAuthCriteria.js'
import { type UserContrasena } from '../domain/UserContrasena.js'
import { UserNoEncontradoError } from '../domain/UserNoEncontradoError.js'
import { type UserRepository } from '../domain/UserRepository.js'
import { type UserUsuario } from '../domain/UserUsuario.js'

export class UserAuth {
  constructor(readonly userRepository: UserRepository) {}

  async run(usuario: UserUsuario, contrasena: UserContrasena) {
    const user = await this.userRepository.matching(new UserAuthCriteria(usuario.value, contrasena.value))
    if (user == null) throw new UserNoEncontradoError()
    return user
  }
}

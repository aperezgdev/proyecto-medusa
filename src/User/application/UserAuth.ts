import { UserUsernameCriteria } from '../domain/UserUsernameCriteria.js'
import { type UserContrasena } from '../domain/UserContrasena.js'
import { UserNoEncontradoError } from '../domain/UserNoEncontradoError.js'
import { type UserRepository } from '../domain/UserRepository.js'
import { type UserUsuario } from '../domain/UserUsuario.js'
import bcrypt from 'bcrypt'

export class UserAuth {
  constructor(readonly userRepository: UserRepository) {}

  async run(usuario: UserUsuario, contrasena: UserContrasena) {
    const user = await this.userRepository.matching(new UserUsernameCriteria(usuario.value))

    if (user == null) throw new UserNoEncontradoError()

    const result = await bcrypt.compare(contrasena.value, user[0].contrasena.value)

    if (!(result)) throw new UserNoEncontradoError()

    return user
  }
}

import { type UserContrasena } from '../domain/UserContrasena.js'
import { UserId } from '../domain/UserId.js'
import { UserNoEncontradoError } from '../domain/UserNoEncontradoError.js'
import { type UserRepository } from '../domain/UserRepository.js'
import { type UserUsuario } from '../domain/UserUsuario.js'

export class UserAuth {
  constructor(readonly userRepository: UserRepository) {}

  async run(usuario: UserUsuario, contrasena: UserContrasena) {
    const user = await this.userRepository.findByUsuario(usuario)
    console.log(user)
    if (user == null) throw new UserNoEncontradoError(new UserId(''))
    if (user.contrasena.value !== contrasena.value) throw new UserNoEncontradoError(new UserId(''))
    return user
  }
}

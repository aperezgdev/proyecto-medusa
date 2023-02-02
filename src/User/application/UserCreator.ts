import { User } from '../domain/User.js'
import { type UserApellido } from '../domain/UserApellido.js'
import { type UserContrasena } from '../domain/UserContrasena.js'
import { type UserNombre } from '../domain/UserNombre.js'
import { type UserOficio } from '../domain/UserOficio.js'
import { type UserRepository } from '../domain/UserRepository.js'
import { type UserUsuario } from '../domain/UserUsuario.js'

export class UserCreator {
  constructor(readonly userRepository: UserRepository) {}

  async run(
    usuario: UserUsuario,
    nombre: UserNombre,
    apellido: UserApellido,
    oficio: UserOficio,
    contrasena: UserContrasena
  ) {
    const user = User.create(usuario, nombre, apellido, oficio, contrasena)
    await this.userRepository.save(user)
  }
}

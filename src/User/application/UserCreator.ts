import { autoInjectable } from 'tsyringe'
import { User } from '../domain/User'
import { type UserApellido } from '../domain/UserApellido'
import { type UserContrasena } from '../domain/UserContrasena'
import { type UserNombre } from '../domain/UserNombre'
import { type UserOficio } from '../domain/UserOficio'
import { type UserRepository } from '../domain/UserRepository'
import { type UserUsuario } from '../domain/UserUsuario'

@autoInjectable()
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

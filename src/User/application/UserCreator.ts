import { User } from '../domain/User'
import { type UserApellido } from '../domain/UserApellido'
import { type UserContrasena } from '../domain/UserContrasena'
import { type UserNombre } from '../domain/UserNombre'
import { type UserOficio } from '../domain/UserOficio'
import { type UserRepository } from '../domain/UserRepository'

export class UserCreator {
  constructor(readonly userRepository: UserRepository) {}

  async run(
    nombre: UserNombre,
    apellido: UserApellido,
    oficio: UserOficio,
    contrasena: UserContrasena
  ) {
    const user = User.create(nombre, apellido, oficio, contrasena)
    await this.userRepository.save(user)
  }
}

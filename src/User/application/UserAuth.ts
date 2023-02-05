import { type UserContrasena } from '../domain/UserContrasena.js'
import { UserNoEncontradoError } from '../domain/UserNoEncontradoError.js'
import { type UserRepository } from '../domain/UserRepository.js'
import { type UserUsuario } from '../domain/UserUsuario.js'
import { type UserFinderExists } from '../domain/UserFinderExists.js'
import bcrypt from 'bcrypt'
import { inject, injectable } from 'tsyringe'

@injectable()
export class UserAuth {
  constructor(
    @inject('UserRepository') readonly userRepository: UserRepository,
    @inject('UserFinderExists') readonly userFinderExists: UserFinderExists
  ) {}

  async run(usuario: UserUsuario, contrasena: UserContrasena) {
    const user = await this.userFinderExists.run(usuario)

    if (!user) throw new UserNoEncontradoError()

    const result = await bcrypt.compare(contrasena.value, user.contrasena.value)

    if (!result) throw new UserNoEncontradoError()

    return user.toPrimitives()
  }
}

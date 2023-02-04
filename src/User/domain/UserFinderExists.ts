import { inject, singleton } from 'tsyringe'
import { UserExistsCriteria } from './UserExistsCriteria.js'
import { type UserRepository } from './UserRepository.js'
import { type UserUsuario } from './UserUsuario.js'

@singleton()
export class UserFinderExists {
  constructor(@inject('UserRepository') private readonly userRepository: UserRepository) {}

  async run(userUsuario: UserUsuario) {
    const userExists = await this.userRepository.matching(new UserExistsCriteria(userUsuario.value))

    if (userExists.length === 0) return null

    return userExists.at(0)
  }
}

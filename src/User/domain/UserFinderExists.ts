import { UserExistsCriteria } from './UserExistsCriteria.js'
import { type UserRepository } from './UserRepository.js'
import { type UserUsuario } from './UserUsuario.js'

export class UserFinderExists {
  constructor(private readonly userRepository: UserRepository) {}

  async run(userUsuario: UserUsuario) {
    const userExists = await this.userRepository.matching(new UserExistsCriteria(userUsuario.value))

    if (userExists.length === 0) return null

    return userExists.at(0)
  }
}

import { type UserId } from './UserId.js'
import { UserNoEncontradoError } from './UserNoEncontradoError.js'
import { type UserRepository } from './UserRepository.js'

export class UserFinder {
  constructor(readonly userRepository: UserRepository) {}

  async run(id: UserId) {
    const user = await this.userRepository.findById(id)

    if (user == null) throw new UserNoEncontradoError(id)
    return user
  }
}

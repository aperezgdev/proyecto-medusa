import { type UserId } from './UserId'
import { UserNoEncontradoError } from './UserNoEncontradoError'
import { type UserRepository } from './UserRepository'

export class UserFinder {
  constructor(readonly userRepository: UserRepository) {}

  async run(id: UserId) {
    const user = await this.userRepository.findById(id)
    if (user == null) throw new UserNoEncontradoError(id)
    return user
  }
}

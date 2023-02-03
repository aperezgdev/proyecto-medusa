import { type UserId } from './UserId.js'
import { UserIdCriteria } from './UserIdCriteria.js'
import { UserNoEncontradoError } from './UserNoEncontradoError.js'
import { type UserRepository } from './UserRepository.js'

export class UserFinder {
  constructor(readonly userRepository: UserRepository) {}

  async run(id: UserId) {
    const user = await this.userRepository.matching(new UserIdCriteria(id.value))

    if (user == null) throw new UserNoEncontradoError()
    return user
  }
}

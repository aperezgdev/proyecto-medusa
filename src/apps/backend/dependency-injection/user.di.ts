import { container } from 'tsyringe'
import { UserAuth } from '../../../User/application/UserAuth.js'
import { UserCreator } from '../../../User/application/UserCreator.js'
import { UserFinderExists } from '../../../User/domain/UserFinderExists.js'
import { MongoUserRepository } from '../../../User/infrastructure/MongoUserRepository.js'

container.register('UserRepository', {
  useClass: MongoUserRepository
})

container.register('UserFinderExists', {
  useClass: UserFinderExists
})

container.register('UserAuth', {
  useClass: UserAuth
})

container.register('UserCreator', {
  useClass: UserCreator
})

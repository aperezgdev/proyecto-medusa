import { type MongoClient } from 'mongodb'
import { inject, singleton } from 'tsyringe'
import { type Criteria } from '../../Shared/domian/Criteria/Criteria.js'
import { MongoRepository } from '../../Shared/infrastructure/MongoRepository.js'
import { User } from '../domain/User.js'
import { type UserRepository } from '../domain/UserRepository.js'

interface UserDocument {
  _id: string
  usuario: string
  nombre: string
  apellido: string
  oficio: string
  contrasena: string
}

@singleton()
export class MongoUserRepository extends MongoRepository<User> implements UserRepository {
  constructor(@inject('MongoClient') private readonly mongoClient: Promise<MongoClient>) {
    super(mongoClient)
  }

  protected collectionName(): string {
    return 'users'
  }

  async save(user: User): Promise<void> {
    await this.persist(user.id.value, user)
  }

  async matching(criteria: Criteria): Promise<User[]> {
    const users = await this.searchByCriteria<UserDocument>(criteria)

    return users.map(({ _id, usuario, nombre, apellido, oficio, contrasena }) => {
      return User.fromPrimitives({ id: _id, usuario, nombre, apellido, oficio, contrasena })
    })
  }
}

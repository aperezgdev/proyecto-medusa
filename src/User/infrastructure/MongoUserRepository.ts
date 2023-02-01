import { MongoRepository } from '../../Shared/infrastructure/MongoRepository'
import { User } from '../domain/User'
import { type UserId } from '../domain/UserId'
import { UserNoEncontradoError } from '../domain/UserNoEncontradoError'
import { type UserRepository } from '../domain/UserRepository'

interface UserDocument {
  _id: string
  nombre: string
  apellido: string
  oficio: string
  contrasena: string
}

export class MongoUserRepository extends MongoRepository<User> implements UserRepository {
  protected collectionName(): string {
    return 'users'
  }

  async save(user: User): Promise<void> {
    await this.persist(user.id.value, user)
  }

  async findById(userId: UserId): Promise<User> {
    const id = userId.value
    const collection = await this.collection()
    const userDocument = await collection.findOne<UserDocument>({ _id: id })

    if (userDocument == null) throw new UserNoEncontradoError(userId)

    const { nombre, apellido, oficio, contrasena } = userDocument

    return User.fromPrimitives({ id, nombre, apellido, oficio, contrasena })
  }
}

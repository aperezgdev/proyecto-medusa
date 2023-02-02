import { ObjectId } from 'mongodb'
import { MongoRepository } from '../../Shared/infrastructure/MongoRepository.js'
import { User } from '../domain/User.js'
import { UserId } from '../domain/UserId.js'
import { UserNoEncontradoError } from '../domain/UserNoEncontradoError.js'
import { type UserRepository } from '../domain/UserRepository.js'
import { type UserUsuario } from '../domain/UserUsuario.js'

interface UserDocument {
  _id: string
  usuario: string
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
    const userDocument = await collection.findOne<UserDocument>({ _id: new ObjectId(id) })

    if (userDocument == null) throw new UserNoEncontradoError(userId)

    const { usuario, nombre, apellido, oficio, contrasena } = userDocument

    return User.fromPrimitives({ id, usuario, nombre, apellido, oficio, contrasena })
  }

  async findByUsuario(userUsuario: UserUsuario): Promise<User> {
    const nusuario = userUsuario.value
    console.log(nusuario)
    const collection = await this.collection()
    const userDocument = await collection.findOne<UserDocument>({ usuario: nusuario })

    if (userDocument == null) throw new UserNoEncontradoError(new UserId(''))

    const { _id, usuario, nombre, apellido, oficio, contrasena } = userDocument

    return User.fromPrimitives({ id: _id, usuario, nombre, apellido, oficio, contrasena })
  }
}

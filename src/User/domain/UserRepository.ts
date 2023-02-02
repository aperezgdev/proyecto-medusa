import { type User } from './User'
import { type UserId } from './UserId'
import { type UserUsuario } from './UserUsuario'

export interface UserRepository {
  save: (user: User) => Promise<void>
  findById: (id: UserId) => Promise<User>
  findByUsuario: (usuario: UserUsuario) => Promise<User>
}

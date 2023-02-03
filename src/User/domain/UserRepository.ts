import { type Criteria } from '../../Shared/domian/Criteria/Criteria'
import { type User } from './User'

export interface UserRepository {
  save: (user: User) => Promise<void>
  matching: (criteria: Criteria) => Promise<User | User[]>
}

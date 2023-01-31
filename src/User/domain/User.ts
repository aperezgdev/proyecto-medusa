import { Uuid } from '../../Shared/Uuid'
import { type UserApellido } from './UserApellido'
import { type UserContrasena } from './UserContrasena'
import { type UserId } from './UserId'
import { type UserNombre } from './UserNombre'
import { type UserOficio } from './UserOficio'

export class User {
  readonly id: UserId
  readonly nombre: UserNombre
  readonly apellido: UserApellido
  readonly oficio: UserOficio
  readonly contrasena: UserContrasena

  constructor(
    id: UserId,
    nombre: UserNombre,
    apellido: UserApellido,
    oficio: UserOficio,
    contrasena: UserContrasena
  ) {
    this.id = id
    this.nombre = nombre
    this.apellido = apellido
    this.oficio = oficio
    this.contrasena = contrasena
  }

  static create(
    nombre: UserNombre,
    apellido: UserApellido,
    oficio: UserOficio,
    contrasena: UserContrasena
  ) {
    return new User(Uuid.random(), nombre, apellido, oficio, contrasena)
  }
}

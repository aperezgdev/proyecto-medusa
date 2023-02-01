import { AggregateRoot } from '../../Shared/domian/AggregateRoot'
import { Uuid } from '../../Shared/Uuid'
import { UserApellido } from './UserApellido'
import { UserContrasena } from './UserContrasena'
import { UserId } from './UserId'
import { UserNombre } from './UserNombre'
import { UserOficio } from './UserOficio'
import { UserUsuario } from './UserUsuario'

export class User extends AggregateRoot {
  readonly id: UserId
  readonly usuario: UserUsuario
  readonly nombre: UserNombre
  readonly apellido: UserApellido
  readonly oficio: UserOficio
  readonly contrasena: UserContrasena

  constructor(
    id: UserId,
    usuario: UserUsuario,
    nombre: UserNombre,
    apellido: UserApellido,
    oficio: UserOficio,
    contrasena: UserContrasena
  ) {
    super()
    this.id = id
    this.usuario = usuario
    this.nombre = nombre
    this.apellido = apellido
    this.oficio = oficio
    this.contrasena = contrasena
  }

  static create(
    usuario: UserUsuario,
    nombre: UserNombre,
    apellido: UserApellido,
    oficio: UserOficio,
    contrasena: UserContrasena
  ) {
    return new User(Uuid.random(), usuario, nombre, apellido, oficio, contrasena)
  }

  toPrimitives() {
    return {
      id: this.id,
      usuario: this.usuario,
      nombre: this.nombre,
      apellido: this.apellido,
      oficio: this.oficio,
      contrasena: this.contrasena
    }
  }

  static fromPrimitives(primitives: {
    id: string
    usuario: string
    nombre: string
    apellido: string
    oficio: string
    contrasena: string
  }) {
    return new User(
      new UserId(primitives.id),
      new UserUsuario(primitives.usuario),
      new UserNombre(primitives.nombre),
      new UserApellido(primitives.apellido),
      new UserOficio(primitives.oficio),
      new UserContrasena(primitives.contrasena)
    )
  }
}

import { AggregateRoot } from '../../Shared/domian/AggregateRoot.js'
import { Uuid } from '../../Shared/Uuid.js'
import { UserApellido } from './UserApellido.js'
import { UserContrasena } from './UserContrasena.js'
import { UserId } from './UserId.js'
import { UserNombre } from './UserNombre.js'
import { UserOficio } from './UserOficio.js'
import { UserUsuario } from './UserUsuario.js'

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
      id: this.id.value,
      usuario: this.usuario.value,
      nombre: this.nombre.value,
      apellido: this.apellido.value,
      oficio: this.oficio.value,
      contrasena: this.contrasena.value
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

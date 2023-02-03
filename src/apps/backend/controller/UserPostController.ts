import { type Request, type Response } from 'express'
import { type UserCreator } from '../../../User/application/UserCreator.js'
import { UserApellido } from '../../../User/domain/UserApellido.js'
import { UserContrasena } from '../../../User/domain/UserContrasena.js'
import { UserNombre } from '../../../User/domain/UserNombre.js'
import { UserOficio } from '../../../User/domain/UserOficio.js'
import { UserUsuario } from '../../../User/domain/UserUsuario.js'
import { type Controller } from './Controller'
import bcrypt from 'bcrypt'

export class UserPostController implements Controller {
  constructor(private readonly UserCreator: UserCreator) {}

  async run(req: Request, res: Response) {
    const { usuario, nombre, apellido, oficio, contrasena } = req.body
    const contrasenaHash = await bcrypt.hash(contrasena, 10)
    await this.UserCreator.run(
      new UserUsuario(usuario),
      new UserNombre(nombre),
      new UserApellido(apellido),
      new UserOficio(oficio),
      new UserContrasena(contrasenaHash)
    )
  }
}

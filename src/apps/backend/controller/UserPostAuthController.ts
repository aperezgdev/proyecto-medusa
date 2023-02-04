import { type Request, type Response } from 'express'
import { inject, singleton } from 'tsyringe'
import { type UserAuth } from '../../../User/application/UserAuth.js'
import { UserContrasena } from '../../../User/domain/UserContrasena.js'
import { UserUsuario } from '../../../User/domain/UserUsuario.js'
import { type Controller } from './Controller.js'

@singleton()
export class UserPostAuthController implements Controller {
  constructor(@inject('UserAuth') private readonly UserAuth: UserAuth) {}

  async run(req: Request, res: Response) {
    const { usuario, contrasena } = req.body
    const user = await this.UserAuth.run(new UserUsuario(usuario), new UserContrasena(contrasena))
    res.send(user)
  }
}

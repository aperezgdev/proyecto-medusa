import { type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'
import { inject, singleton } from 'tsyringe'
import { type UserAuth } from '../../../User/application/UserAuth.js'
import { UserContrasena } from '../../../User/domain/UserContrasena.js'
import { UserUsuario } from '../../../User/domain/UserUsuario.js'
import { type Controller } from './Controller.js'

@singleton()
export class UserPostAuthController implements Controller {
  constructor(@inject('UserAuth') private readonly UserAuth: UserAuth) {}

  async run(req: Request, res: Response) {
    try {
      const { usuario, contrasena } = req.body
      const { id } = await this.UserAuth.run(new UserUsuario(usuario), new UserContrasena(contrasena))

      const JWT_SECRET = process.env.JWT_SECRET ?? 'xd'
      const JWT_REFRESH = process.env.JWT_REFRESH ?? 'xd'

      const expiresIn = 60 * 5

      const token = jwt.sign({ id }, JWT_SECRET, { expiresIn })
      const refreshToken = jwt.sign({ id }, JWT_REFRESH, { expiresIn: 60 * 60 * 24 })
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        sameSite: 'none',
        secure: true
      })

      res.send({ token, expiresIn })
    } catch (err) {
      console.error(err)
      res.status(400).send(err)
    }
  }
}

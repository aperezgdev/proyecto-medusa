import { type Request, type Response } from 'express'
import { type Controller } from './Controller'

export class LogoutController implements Controller {
  async run(req: Request, res: Response) {
    res.clearCookie('refreshToken')
    res.statusCode = 200
    res.send()
  }
}

import { type Request, type Response } from 'express'
import { type UserFinder } from '../../../User/domain/UserFinder.js'
import { UserId } from '../../../User/domain/UserId.js'
import { type Controller } from './Controller'

export class UserGetController implements Controller {
  constructor(private readonly userFinder: UserFinder) {}

  async run(req: Request, res: Response) {
    const idUser = req.params.id

    const user = await this.userFinder.run(new UserId(idUser))
    res.send(user)
  }
}

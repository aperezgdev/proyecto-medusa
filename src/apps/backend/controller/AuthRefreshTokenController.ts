import { type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'

interface payloadUser {
  id: string
}

export const authRefreshTokenController = (req: Request, res: Response) => {
  const { refreshToken } = req.cookies
  if (!refreshToken) throw new Error('No existe el token')

  const JWT_REFRESH = process.env.JWT_REFRESH ?? 'xd'

  const payload = jwt.verify(refreshToken, JWT_REFRESH) as payloadUser

  const JWT_SECRET = process.env.JWT_SECRET ?? 'xd'
  const expiresIn = 60 * 5

  const token = jwt.sign({ id: payload.id }, JWT_SECRET, { expiresIn })

  return res.json({ token, expiresIn })
}

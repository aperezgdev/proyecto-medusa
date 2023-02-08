import { type Response, type Request, type NextFunction } from 'express'
import jwt, { type Secret } from 'jsonwebtoken'

interface Auth {
  id: string
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.get('authorization')

  if (!authorization) {
    res.status(400)
    return res.json({ error: 'Falta el token' })
  }

  const JWT_SECRET: Secret = process.env.JWT_SECRET ?? 'xd'
  const token = authorization.substring(7)
  console.log(token)
  const decodeToken = jwt.verify(token, JWT_SECRET)

  if (!decodeToken) {
    res.status(401).send()
    return
  }

  const auth = decodeToken as Auth
  res.locals.id = auth.id

  next()
}

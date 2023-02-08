import { type Token } from '../interfaces/Token'

const FETCH_OPTIONS = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}

export const refreshToken = async (): Promise<Token> => {
  const newToken = await fetch('http://localhost:3001/refresh/', { ...FETCH_OPTIONS, credentials: 'include' })
  return await newToken.json()
}

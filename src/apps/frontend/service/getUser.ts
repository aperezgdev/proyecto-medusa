import { type Auth } from '../interfaces/Auth'

const FETCH_OPTIONS = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'

  }
}

export const getUser = async (user: Auth) => {
  const result = await fetch('http://localhost:3001/auth', {
    ...FETCH_OPTIONS,
    body: JSON.stringify(user),
    credentials: 'include'
  })
  return await result.json()
}

import { type User } from '../interfaces/User'

const FETCH_OPTIONS = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}

export const registerUser = async (newUser: User) => {
  await fetch('http://localhost:3001/user', {
    ...FETCH_OPTIONS,
    body: JSON.stringify(newUser)
  }).catch((err) => {
    console.error(err)
  })
}

import { type User } from '../interfaces/User'

export const registerUser = async (newUser: User) => {
  await fetch('http://localhost:3001/user', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  }).catch(err => {
    console.error(err)
  })
}

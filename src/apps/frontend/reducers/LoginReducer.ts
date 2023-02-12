import { AuthActionType } from '../components/FormLogin'
import { type Auth, type AuthAction } from '../interfaces/Auth'

export const reducerLogin = (state: Auth, action: AuthAction) => {
  const { type, payload } = action

  if (AuthActionType.CHG_USUARIO === type) {
    return { ...state, usuario: payload }
  }

  if (AuthActionType.CHG_PASSWORD === type) {
    return { ...state, contrasena: payload }
  }

  return state
}

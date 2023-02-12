export interface Auth {
  usuario: string
  contrasena: string
}

export interface AuthAction {
  type: AuthActionType
  payload: string
}

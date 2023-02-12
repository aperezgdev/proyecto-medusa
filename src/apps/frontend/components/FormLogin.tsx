import { useContext, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../service/getUser'
import UserContext from '../context/tokenContext'
import { reducerLogin } from '../reducers/LoginReducer'

const AUTH = {
  usuario: '',
  contrasena: ''
}

export enum AuthActionType {
  CHG_USUARIO = 'CHG_USUARIO',
  CHG_PASSWORD = 'CHG_PASSWORD'
}

export const FormLogin = () => {
  const [auth, dispatch] = useReducer(reducerLogin, AUTH)
  const { setToken } = useContext(UserContext)
  const navigate = useNavigate()

  function handlerIniciarSesion(event: React.FormEvent) {
    event.preventDefault()
    if (auth != null) {
      getUser(auth)
        .then((token) => {
          setToken({
            token: token.token,
            expiresIn: new Date(Date.now() + (token.expiresIn - 60) * 1000)
          })
          navigate('/movimientos')
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }

  return (
    <form
      className="flex flex-col gap-7 w-[100%] justify-center items-center"
      onSubmit={handlerIniciarSesion}
    >
      <input
        type="text"
        placeholder="Usuario"
        className="border w-[65%] text-xl p-2 bg-[#EBEBEB] rounded-sm"
        onChange={(evt) => {
          dispatch({ type: AuthActionType.CHG_USUARIO, payload: evt.target.value })
        }}
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="border  w-[65%] text-xl p-2 bg-[#EBEBEB] rounded-sm"
        onChange={(evt) => {
          dispatch({ type: AuthActionType.CHG_PASSWORD, payload: evt.target.value })
        }}
      />
      <input
        type="submit"
        value="INICIAR SESIÓN"
        className="bg-[#C026D3] text-white text-xl cursor-pointer font-bold p-2 w-[50%] rounded-sm"
      />
      <p className="text-lg">
        ¿No tienes cuenta?{' '}
        <a
          className="text-blue-600 underline cursor-pointer"
          onClick={() => {
            navigate('/registro')
          }}
        >
          Crear
        </a>
      </p>
    </form>
  )
}

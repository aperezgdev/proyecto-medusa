import { type Auth } from '../interfaces/Auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../service/getUser'

const AUTH = {
  usuario: '',
  contrasena: ''
}

export const FormLogin = () => {
  const [auth, setAuth] = useState<Auth>(AUTH)
  const navigate = useNavigate()

  function handlerIniciarSesion(event: React.FormEvent) {
    console.log(auth)
    event.preventDefault()
    if (auth != null) {
      getUser(auth).then(user => {
        setAuth(user)
      }).catch(err => {
        console.error(err)
      })
    }
    navigate('/movimientos')
  }

  function handlerRegister(event: any) {
    navigate('/registro')
  }

  function handlerUsuario(event: React.ChangeEvent<HTMLInputElement>) {
    const usuario = event.target.value
    setAuth({ ...auth, usuario })
  }

  function handlerContrasena(event: React.ChangeEvent<HTMLInputElement>) {
    const contrasena = event.target.value
    setAuth({ ...auth, contrasena })
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
        onChange={handlerUsuario}
      />
      <input
        type="password"
        placeholder="Contraseña"
        className="border  w-[65%] text-xl p-2 bg-[#EBEBEB] rounded-sm"
        onChange={handlerContrasena}
      />
      <input
        type="submit"
        value="INICIAR SESIÓN"
        className="bg-[#C026D3] text-white text-xl cursor-pointer font-bold p-2 w-[50%] rounded-sm"
      />
      <p className="text-lg">
        ¿No tienes cuenta?{' '}
        <a className="text-blue-600 underline cursor-pointer" onClick={handlerRegister}>
          Crear
        </a>
      </p>
    </form>
  )
}

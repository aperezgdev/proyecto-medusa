import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { type User } from '../interfaces/User'
import { registerUser } from '../service/registerUser'

const NEW_USER = {
  usuario: '',
  nombre: '',
  apellido: '',
  oficio: '',
  contrasena: ''
}

export const FormRegistro = () => {
  const [newUser, setNewUser] = useState<User>(NEW_USER)
  const navigate = useNavigate()

  function handlerCrear(event: React.FormEvent) {
    event.preventDefault()
    if (newUser != null) void registerUser(newUser)
    navigate('/')
  }

  function handlerLogin(event: any) {
    navigate('/')
  }

  function handlerUsuario(event: React.ChangeEvent<HTMLInputElement>) {
    const usuario = event.target.value
    setNewUser({ ...newUser, usuario })
  }

  function handlerNombre(event: React.ChangeEvent<HTMLInputElement>) {
    const nombre = event.target.value
    setNewUser({ ...newUser, nombre })
  }
  function handlerApellido(event: React.ChangeEvent<HTMLInputElement>) {
    const apellido = event.target.value
    setNewUser({ ...newUser, apellido })
  }

  function handlerOficio(event: React.ChangeEvent<HTMLInputElement>) {
    const oficio = event.target.value
    setNewUser({ ...newUser, oficio })
  }
  function handlerContrasena(event: React.ChangeEvent<HTMLInputElement>) {
    const contrasena = event.target.value
    setNewUser({ ...newUser, contrasena })
  }

  return (
    <form
            className="flex flex-col gap-7 w-[100%] justify-center items-center"
            onSubmit={handlerCrear}
          >
            <input
              type="text"
              placeholder="Usuario"
              className="border w-[65%] text-xl p-2 bg-[#EBEBEB] rounded-sm"
              onChange={handlerUsuario}
            />
            <input
              type="text"
              placeholder="Nombre"
              className="border w-[65%] text-xl p-2 bg-[#EBEBEB] rounded-sm"
              onChange={handlerNombre}
            />
            <input
              type="text"
              placeholder="Apellido"
              className="border w-[65%] text-xl p-2 bg-[#EBEBEB] rounded-sm"
              onChange={handlerApellido}
            />
            <input
              type="text"
              placeholder="Oficio(opcional)"
              className="border w-[65%] text-xl p-2 bg-[#EBEBEB] rounded-sm"
              onChange={handlerOficio}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="border  w-[65%] text-xl p-2 bg-[#EBEBEB] rounded-sm"
              onChange={handlerContrasena}
            />
            <input
              type="submit"
              value="Registrarse"
              className="bg-[#C026D3] text-white text-xl cursor-pointer font-bold p-2 w-[50%] rounded-sm"
            />
            <p className="text-lg">
              ¿Ya tienes cuenta?{' '}
              <a className="text-blue-600 underline cursor-pointer" onClick={handlerLogin}>
                Iniciar Sesión
              </a>
            </p>
          </form>
  )
}

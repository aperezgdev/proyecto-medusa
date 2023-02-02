import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Registro = () => {
  const [newUsuario, setNewUsuario] = useState({})
  const navigate = useNavigate()

  function handlerCrear(event: any) {
    event.preventDefault()
    void fetch('http://localhost:3001/user', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUsuario)
    })
    navigate('/')
  }

  function handlerLogin(event: any) {
    navigate('/')
  }

  function handlerUsuario(event: React.ChangeEvent<HTMLInputElement>) {
    const usuario = event.target.value
    setNewUsuario({ ...newUsuario, usuario })
  }

  function handlerNombre(event: React.ChangeEvent<HTMLInputElement>) {
    const nombre = event.target.value
    setNewUsuario({ ...newUsuario, nombre })
  }
  function handlerApellido(event: React.ChangeEvent<HTMLInputElement>) {
    const apellido = event.target.value
    setNewUsuario({ ...newUsuario, apellido })
  }

  function handlerOficio(event: React.ChangeEvent<HTMLInputElement>) {
    const oficio = event.target.value
    setNewUsuario({ ...newUsuario, oficio })
  }
  function handlerContrasena(event: React.ChangeEvent<HTMLInputElement>) {
    const contrasena = event.target.value
    setNewUsuario({ ...newUsuario, contrasena })
  }

  return (
    <main className="flex flex-row w-full">
      <section className="flex w-[30%] h-screen justify-center items-center">
        <article className="flex flex-col w-[80%] h-[30%] justify-center items-center gap-[15%]">
          <img src="/Medusa.png" className="w-1/2"></img>
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
        </article>
      </section>
      <section className="w-[70%] h-screen bg-gradient-to-l from-fuchsia-600 to-pink-600"></section>
    </main>
  )
}

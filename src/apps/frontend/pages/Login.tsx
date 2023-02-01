import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()

  function handlerLogin(event: any) {
    event.preventDefault()
    navigate('/menu')
  }

  return (
    <main className="flex flex-row w-full">
      <section className="w-[70%] h-screen bg-gradient-to-l from-fuchsia-600 to-pink-600"></section>
      <section className="flex w-[30%] h-screen justify-center items-center">
        <article className="flex flex-col w-[80%] h-[30%] justify-center items-center gap-[15%]">
          <img src="/Medusa.png" className="w-1/2"></img>
          <form
            className="flex flex-col gap-7 w-[100%] justify-center items-center"
            onSubmit={handlerLogin}
          >
            <input
              type="text"
              placeholder="Usuario"
              className="border w-[65%] text-xl p-2 bg-[#EBEBEB] rounded-sm"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="border  w-[65%] text-xl p-2 bg-[#EBEBEB] rounded-sm"
            />
            <input
              type="submit"
              value="INICIAR SESIÓN"
              className="bg-[#C026D3] text-white text-xl cursor-pointer font-bold p-2 w-[50%] rounded-sm"
            />
            <p className="text-lg">
              ¿No tienes cuenta? <a className="text-blue-600 underline cursor-pointer">Crear</a>
            </p>
          </form>
        </article>
      </section>
    </main>
  )
}

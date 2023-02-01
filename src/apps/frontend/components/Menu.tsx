import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <main className="flex flex-row w-[100%]">
      <aside className="w-[20%] h-screen justify-center items-center bg-gradient-to-l from-fuchsia-600 to-pink-600">
        <section className="flex w-[90%] m-[5%] mt-[10%]">
          <img src="/Medusa.png" className="w-2/5 bg-white rounded-full p-3"></img>
          <section className="flex flex-row w-[100%]  justify-center items-center gap-2">
            <section className="flex flex-col text-white">
              <div className="flex flex-row gap-3 justify-center items-center">
                <span className="text-center text-lg font-bold">MARIO ARAUJO</span>
                <img src="/Ajustes.png" className="w-4 h-4 cursor-pointer"></img>
              </div>
              <span className="text-sm font-light">Desarrollador</span>
            </section>
          </section>
        </section>
        <nav className="flex flex-col justify-center items-center w-[100%] mt-[15%]">
          <ul className="flex flex-col gap-6 w-[75%] justify-center items-center">
            <li className="flex w-[100%]">
              <Link className="w-[100%] bg-white p-3 rounded-sm font-semibold text-lg" to={'/'}>
                MOVIMIENTOS
              </Link>
            </li>
            <li className="flex w-[100%]">
              <Link className="w-[100%] bg-white p-3 rounded-sm font-semibold text-lg" to={'/'}>
                INGRESOS
              </Link>
            </li>
            <li className="flex w-[100%]">
              <Link className="w-[100%] bg-white p-3 rounded-sm font-semibold text-lg" to={'/'}>
                GASTOS
              </Link>
            </li>
            <li className="flex w-[100%]">
              <Link className="w-[100%] bg-white p-3 rounded-sm font-semibold text-lg" to={'/'}>
                BALANCE
              </Link>
            </li>
            <li className="flex w-[100%]">
              <Link className="w-[100%] bg-white p-3 rounded-sm font-semibold text-lg" to={'/'}>
                CUENTA BANCARIA
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-col items-center mt-[60%]">
          <Link
            className="w-[60%] bg-white p-2 text-center rounded-sm font-semibold text-md"
            to={'/'}
          >
            CERRAR SESIÓN
          </Link>
        </nav>
      </aside>
    </main>
  )
}

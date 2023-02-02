import { Link } from 'react-router-dom'

export const Logout = () => {
  return (
    <Link className=" bg-white p-3 px-10 text-center rounded-sm font-semibold text-md" to={'/'}>
      CERRAR SESIÓN
    </Link>
  )
}

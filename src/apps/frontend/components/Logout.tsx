import { Link } from 'react-router-dom'

export const Logout = () => {
  return (
    <Link className="w-[60%] bg-white p-2 text-center rounded-sm font-semibold text-md" to={'/'}>
      CERRAR SESIÓN
    </Link>
  )
}

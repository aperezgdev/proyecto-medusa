import { Logout } from './Logout'
import { Navigator } from './Navigator'
import { ProfileIcon } from './ProfileIcon'

const user = {
  nombre: 'Mario',
  apellido: 'Araujo',
  oficio: 'Desarrollador'
}

export const Menu = () => {
  return (
    <main className="flex flex-row w-[100%]">
      <aside className="w-[20%] h-screen justify-center items-center bg-gradient-to-l from-fuchsia-600 to-pink-600">
        <ProfileIcon nombre={user.nombre} apellido={user.apellido} oficio={user.oficio} />
        <Navigator />
        <nav className="flex flex-col items-center mt-[60%]">
          <Logout />
        </nav>
      </aside>
    </main>
  )
}

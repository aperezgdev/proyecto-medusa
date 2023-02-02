import { useEffect, useState } from 'react'
import { Logout } from './Logout'
import { Navigator } from './Navigator'
import { ProfileIcon } from './ProfileIcon'

const user = {
  nombre: 'Mario',
  apellido: 'Araujo',
  oficio: 'Desarrollador'
}

export const Menu = () => {
  const [color, setColor] = useState('bg-gradient-to-l from-fuchsia-600 to-pink-600')

  useEffect(() => {
    const interfaz = localStorage.getItem('interfaz')
    if (interfaz != null) {
      setColor(interfaz)
    }
  })
  return (
    <aside className={`flex flex-col w-[20%] h-screen items-center ${color}`}>
      <section className='flex flex-col items-center gap-10 mt-[15%]'>
        <ProfileIcon nombre={user.nombre} apellido={user.apellido} oficio={user.oficio} />
        <Navigator />
      </section>
      <nav className="flex flex-col items-center mt-auto mb-5">
        <Logout />
      </nav>
    </aside>
  )
}

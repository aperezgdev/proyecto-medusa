import { ColorInterfaz } from './ColorInterfaz'

interface PropsProfileIcon {
  nombre: string
  apellido: string
  oficio: string
}

export const ProfileIcon = ({ nombre, apellido, oficio }: PropsProfileIcon) => {
  return (
    <section className="flex w-[90%]">
      <img src="/Medusa.png" className="w-2/5 bg-white rounded-full p-3"></img>
      <section className="flex flex-row w-[100%]  justify-center items-center gap-2">
        <section className="flex flex-col text-white">
          <div className="flex flex-row gap-3 justify-center items-center">
            <span className="text-center text-lg font-bold">{`${nombre.toUpperCase()} ${apellido.toUpperCase()}`}</span>
            <img src="/Ajustes.png" className="w-4 h-4 cursor-pointer"></img>
          </div>
          <span className="text-sm font-light">{oficio}</span>
          <ColorInterfaz/>
        </section>
      </section>
    </section>
  )
}

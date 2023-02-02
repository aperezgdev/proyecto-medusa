const colores = [
  {
    codigo: 'bg-gradient-to-l from-fuchsia-600 to-pink-600'
  },
  {
    codigo: 'bg-lime-500'
  }
]

export const ColorInterfaz = () => {
  function cambiarCodigo(codigo: string) {
    localStorage.setItem('interfaz', codigo)
  }

  return (
    <div className="flex flex-row gap-1">
      {colores.map(({ codigo }) => (
        <button
          className={`${codigo} w-4 h-4 mt-[5%] rounded-full border cursor-pointer`}
          key={codigo}
          onClick={() => {
            cambiarCodigo(codigo)
          }}
        ></button>
      ))}
    </div>
  )
}

const cabeceras = ['Concepto', 'Cantidad', 'Fecha', 'Resultado']

export const Cabecera = () => {
  return (
    <div className="grid grid-cols-4 gap-10">
      {cabeceras.map((cabecera) => {
        return (
          <div key={cabecera} className="flex font-semibold text-2xl px-4">
            <span>{cabecera}</span>
          </div>
        )
      })}
    </div>
  )
}

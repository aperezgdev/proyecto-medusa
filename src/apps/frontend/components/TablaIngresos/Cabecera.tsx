const cabeceras = ['Concepto', 'Cantidad', 'Fecha', 'Resultado']

export const Cabecera = () => {
  return (
    <div className="grid grid-cols-4 gap-10">
      {cabeceras.map((cabecera) => {
        return (
          <div key={cabecera} className="flex font-semibold text-lg">
            <span>{cabecera}</span>
          </div>
        )
      })}
    </div>
  )
}

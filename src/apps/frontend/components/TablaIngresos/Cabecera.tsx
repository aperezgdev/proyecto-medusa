const cabeceras = ['Concepto', 'Cantidad', 'Fecha', 'Resultado']

export const Cabecera = () => {
  return (
    <thead className="bg-gray-200 border-b">
      <tr>
        {cabeceras.map((cabecera) => {
          return (
            <th
              key={cabecera}
              scope="col"
              className="text-lg font-medium text-gray-900 px-5 py-2 text-left"
            >
              {cabecera}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

import { type Ingreso } from '../../interfaces/Ingreso'

interface PropsIngresos {
  ingreso: Ingreso
  detallado: React.Dispatch<React.SetStateAction<Ingreso | null>>
}

export const Registro = ({ ingreso, detallado }: PropsIngresos) => {
  return (
    <tr
      key={ingreso.id.value}
      className="bg-white border-b transition duration-300 text-gray-900 font-light ease-in-out hover:bg-gray-100 whitespace-nowrap cursor-pointer"
      onClick={() => {
        detallado(ingreso)
      }}
    >
      <td className="text-base text-gray-900 font-medium px-4 py-3">
        {ingreso.concepto.conceptoNombre}
      </td>
      <td className="text-base px-4 py-3">{ingreso.cantidad} €</td>
      <td className="text-base px-4 py-3">{ingreso.fecha}</td>
      <td className="text-base px-4 py-3">{ingreso.resultado} €</td>
    </tr>
  )
}

import { useContext } from 'react'
import ContextIngreso, { IngresoActionType } from '../../context/ingresoContext'
import { type Ingreso } from '../../interfaces/Ingreso'

interface PropsIngresos {
  ingreso: Ingreso
}

export const Registro = ({ ingreso }: PropsIngresos) => {
  const { dispatch } = useContext(ContextIngreso)

  return (
    <div
      key={ingreso.id.value}
      className="grid grid-cols-4 gap-10 my-1 bg-white border-b transition duration-300 text-gray-900 ease-in-out hover:bg-gray-100 rounded-md cursor-pointer"
      onClick={() => {
        dispatch({ type: IngresoActionType.CHG_DETALLADO, payload: { ingresos: ingreso } })
      }}
    >
      <div className="flex items-center text-base text-gray-900 px-2 py-2">
        {ingreso.concepto.conceptoNombre}
      </div>
      <div className="flex items-center text-base px-2 py-2">{ingreso.cantidad} €</div>
      <div className="flex items-center text-base px-2 py-2">{ingreso.fecha}</div>
      <div className="flex items-center text-base px-2 py-2">{ingreso.resultado} €</div>
    </div>
  )
}

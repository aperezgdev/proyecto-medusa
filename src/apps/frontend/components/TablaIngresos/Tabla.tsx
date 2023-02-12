import { useContext } from 'react'
import ContextIngreso from '../../context/ingresoContext'
import { Cabecera } from './Cabecera'
import { Registro } from './Registro'

export const Tabla = () => {
  const { loading, ingresos } = useContext(ContextIngreso)

  return (
    <div className="flex flex-col p-5 h-full">
      <Cabecera />
      <div className="flex flex-col overflow-x-auto my-3">
        {!loading
          ? (
              ingresos.map((ingreso) => <Registro key={ingreso.id.value} ingreso={ingreso}></Registro>)
            )
          : (
          <div>loading</div>
            )}
      </div>
    </div>
  )
}

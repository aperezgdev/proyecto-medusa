import { type Ingreso } from '../../interfaces/Ingreso'
import { Cabecera } from './Cabecera'
import { Registro } from './Registro'

interface PropsIngresos {
  ingresos: Ingreso[]
  detallado: React.Dispatch<React.SetStateAction<Ingreso>>
}

export const Tabla = ({ ingresos, detallado }: PropsIngresos) => {
  return (
    <div className="flex flex-col h-[100%] p-5">
      <span className="text-2xl pb-3 font-bold">Diciembre</span>
      <div className="overflow-x-auto">
        <div className="inline-block w-[100%]">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <Cabecera></Cabecera>
              <tbody>
                {ingresos?.map((ingreso) => (
                  <Registro
                    key={ingreso.id.value}
                    ingreso={ingreso}
                    detallado={detallado}
                  ></Registro>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

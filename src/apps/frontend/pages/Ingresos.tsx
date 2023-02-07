import { useContext, useEffect, useState } from 'react'
import { Tabla } from '../components/TablaIngresos/Tabla'
import ContextUser from '../context/UserContext'
import { type Ingreso } from '../interfaces/Ingreso'
import { Layout } from '../layout/Layout'
import { getIngresos } from '../service/getIngresos'

export const Ingresos = () => {
  const { user } = useContext(ContextUser)
  const [ingresos, setIngresos] = useState<Ingreso[]>([])
  const [detallado, setDetallado] = useState<Ingreso | null>(null)

  useEffect(() => {
    getIngresos(user.id)
      .then((respuesta) => {
        setIngresos(respuesta)
        setDetallado(respuesta[respuesta.length - 1])
      })
      .catch((error) => {
        console.error(error)
      })
  }, [Ingresos])

  return (
    <Layout>
      <aside className="flex flex-col w-[100%] h-[100%] p-12">
        <h1 className="font-bold text-3xl pb-5">INGRESOS</h1>
        <div className="flex flex-row h-[100%]">
          <div className="flex flex-row w-[100%] h-[100%] gap-[2%] flex-wrap">
            <div className="h-[63%] w-[55%] shadow-md bg-[#FAFAFA]">
              <Tabla ingresos={ingresos} detallado={setDetallado}></Tabla>
            </div>
            <div className="bg-[#FAFAFA] shadow-md h-[40%] w-[23%]"></div>
            <div className="h-min shadow-md w-[18%]">
              <form className="flex flex-col text-lg gap-5 text-white font-semibold">
                <button className="bg-[#C026D3] rounded-md py-3">Añadir Concepto</button>
                <button className="bg-[#C026D3] rounded-md py-3">Añadir Ingreso</button>
                <button className="bg-[#C026D3] rounded-md py-3">Ver Totales</button>
              </form>
            </div>
            <div className="bg-[#FAFAFA] shadow-md h-[33%] w-[55%]">
              <div className="flex flex-col h-[100%] p-5">
                <span className="text-2xl pb-3 font-bold">Ingreso Seleccionado</span>
                <div className="flex flex-row w-[100%]">
                  <div className="flex flex-col w-[50%]">
                    <span>Concepto</span>
                    {detallado ? detallado.concepto.conceptoNombre : ''}
                    <span>Cantidad</span>
                    <span>Fecha</span>
                    <span>Observaciones</span>
                  </div>
                  <div className="flex flex-col w-[50%]">
                    <span>Localidad</span>
                    <span>Cnatidad Cuenta</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </Layout>
  )
}

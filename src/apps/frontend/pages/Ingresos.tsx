import { useEffect, useState } from 'react'
import { type Ingreso } from '../interfaces/Ingreso'
import { Layout } from '../layout/Layout'
import { getIngresos } from '../service/getIngresos'

export const Ingresos = () => {
  const [ingresos, setIngresos] = useState<Ingreso[]>()

  useEffect(() => {
    getIngresos('63de7b8a95c8289a44e18d06')
      .then((respuesta) => {
        setIngresos(respuesta)
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
            <div className="bg-slate-100 h-[63%] w-[55%]">
              <div className="flex flex-col h-[100%]">
                <div className="overflow-x-auto ">
                  <div className="inline-block w-[100%]">
                    <div className="overflow-hidden">
                      <table className="min-w-full">
                        <thead className="bg-gray-200 border-b">
                          <tr>
                            <th
                              scope="col"
                              className="text-lg font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Concepto
                            </th>
                            <th
                              scope="col"
                              className="text-lg font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Cantidad
                            </th>
                            <th
                              scope="col"
                              className="text-lg font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Fecha
                            </th>
                            <th
                              scope="col"
                              className="text-lg font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Cuenta
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {ingresos?.map((ingresos) => (
                            <tr
                              key={ingresos.id.value}
                              className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                            >
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {ingresos.concepto.conceptoNombre}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {ingresos.cantidad} €
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 h-[40%] w-[23%]"></div>
            <div className="bg-slate-100 h-min w-[18%]">
              <form className="flex flex-col p-5 text-lg gap-5 text-white">
                <button className="bg-[#C026D3] py-3">Añadir Concepto</button>
                <button className="bg-[#C026D3] py-3">Añadir Ingreso</button>
                <button className="bg-[#C026D3] py-3">Ver Totales</button>
              </form>
            </div>
            <div className="bg-slate-100 h-[33%] w-[55%]"></div>
          </div>
        </div>
      </aside>
    </Layout>
  )
}

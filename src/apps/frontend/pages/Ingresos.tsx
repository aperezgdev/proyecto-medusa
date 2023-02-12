import { Layout } from '../layout/Layout'
import { TablaIngresos } from '../components/TablaIngresos/TablaIngreso'
import { Detallado } from '../components/Ingresos/Detallado'

export const Ingresos = () => {
  return (
    <Layout>
      <aside className="flex flex-col w-[100%] h-[100%] gap-[2%] p-12">
        <h1 className="font-[1000] text-5xl h-[5%]">INGRESOS</h1>
        <div className="flex flex-row h-[93%]">
          <div className="flex flex-row w-[100%] h-[100%] gap-[2%] flex-wrap">
            <TablaIngresos />
            <div className="bg-[#FAFAFA] shadow-md h-[40%] w-[23%]"></div>
            <div className="h-min shadow-md w-[18%]">
              <form className="flex flex-col text-lg gap-5 text-white font-semibold">
                <button className="bg-[#C026D3] rounded-md py-3">Añadir Concepto</button>
                <button className="bg-[#C026D3] rounded-md py-3">Añadir Ingreso</button>
                <button className="bg-[#C026D3] rounded-md py-3">Ver Totales</button>
              </form>
            </div>
            <Detallado />
          </div>
        </div>
      </aside>
    </Layout>
  )
}

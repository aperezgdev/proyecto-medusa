import { Layout } from '../layout/Layout'

export const Ingresos = () => {
  return (
    <Layout>
      <aside className="flex flex-col w-[100%] p-[4%]">
        <h1 className="font-bold text-3xl pb-5">INGRESOS</h1>
        <div className="flex flex-col ">
          <div className="flex flex-row w-[100%] gap-[3%]">
            <div className="bg-slate-100 w-[55%]">
              <div className="container mx-auto rounded-md dark:text-gray-100">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs">
                    <thead className="rounded-t-lg dark:bg-gray-700">
                      <tr className="text-left text-lg">
                        <th title="Ranking" className="p-3 ">
                          Concepto
                        </th>
                        <th title="Team name" className="p-3 ">
                          Cantidad
                        </th>
                        <th title="Wins" className="p-3 ">
                          Fecha
                        </th>
                        <th title="Losses" className="p-3 ">
                          Cuenta
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-left border-b text-base border-opacity-20 dark:border-gray-700 dark:bg-gray-800">
                        <td className="px-4 py-3 ">
                          <span>Sueldo</span>
                        </td>
                        <td className="px-4 py-3 ">
                          <span>925,92€</span>
                        </td>
                        <td className="px-4 py-3 ">
                          <span>28/12/2022</span>
                        </td>
                        <td className="px-4 py-3 ">
                          <span>1200,00€</span>
                        </td>
                      </tr>
                      <tr className="text-left border-b text-base border-opacity-20 dark:border-gray-700 dark:bg-gray-800">
                        <td className="px-4 py-3 ">
                          <span>Bizum</span>
                        </td>
                        <td className="px-4 py-3 ">
                          <span>100,00€</span>
                        </td>
                        <td className="px-4 py-3 ">
                          <span>29/12/2022</span>
                        </td>
                        <td className="px-4 py-3 ">
                          <span>1300,00€</span>
                        </td>
                      </tr>
                      <tr className="text-left border-b text-base border-opacity-20 dark:border-gray-700 dark:bg-gray-800">
                        <td className="px-4 py-3 ">
                          <span>Paga Extra</span>
                        </td>
                        <td className="px-4 py-3 ">
                          <span>1000,00€</span>
                        </td>
                        <td className="px-4 py-3 ">
                          <span>15/01/2023</span>
                        </td>
                        <td className="px-4 py-3 ">
                          <span>2200,00€</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 w-[25%]"></div>
            <div className="bg-slate-100 w-[20%]"></div>
          </div>
          <div></div>
        </div>
      </aside>
    </Layout>
  )
}

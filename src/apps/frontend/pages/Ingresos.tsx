import { Layout } from '../layout/Layout'

export const Ingresos = () => {
  return (
    <Layout>
      <aside className="flex flex-col w-[100%] h-[100%] p-5">
        <h1 className="font-bold text-3xl pb-5">INGRESOS</h1>
        <div className="flex flex-col ">
          <div className="flex flex-row w-[100%] gap-[3%]">
            <div className="bg-slate-100 overflow-auto w-[55%]"></div>
            <div className="bg-slate-100 w-[25%]"></div>
            <div className="bg-slate-100 w-[20%]"></div>
          </div>
          <div></div>
        </div>
      </aside>
    </Layout>
  )
}

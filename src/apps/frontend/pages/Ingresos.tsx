import { useState } from 'react'
import { Tabla } from '../components/TablaIngresos/Tabla'
import { useIngresos } from '../hooks/useIngresos'
import { type Ingreso } from '../interfaces/Ingreso'
import { Layout } from '../layout/Layout'
import { eliminarIngreso } from '../service/IngresoService'
import { useToken } from '../hooks/useToken'

const UserIngreso = {
  id: '',
  usuario: '',
  nombre: '',
  apellido: '',
  oficio: '',
  contrasena: ''
}

const DEFAULT_INGRESO = {
  id: { value: '' },
  cantidad: 0,
  concepto: { id: '', conceptoNombre: '' },
  fecha: '',
  cuenta: { id: '', cantidad: 0, user: UserIngreso },
  resultado: 0,
  user: UserIngreso
}

export const Ingresos = () => {
  const { loading, ingresos } = useIngresos()
  const [detallado, setDetallado] = useState<Ingreso>(DEFAULT_INGRESO)
  const { token } = useToken()

  function handlerEliminar(idIngreso: string) {
    if (idIngreso !== '') {
      eliminarIngreso(idIngreso, token)
        .then((respuesta) => {
          ingresos.filter((ingreso) => ingreso.id.value !== idIngreso)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }

  function handlerSubmit(event: React.FormEvent) {
    event.preventDefault()
  }

  return (
    <Layout>
      <aside className="flex flex-col w-[100%] h-[100%] gap-[2%] p-12">
        <h1 className="font-bold text-3xl h-[5%]">INGRESOS</h1>
        <div className="flex flex-row h-[93%]">
          <div className="flex flex-row w-[100%] h-[100%] gap-[2%] flex-wrap">
            <div className="h-[63%] w-[55%] shadow-md bg-[#FAFAFA]">
              {!loading
                ? (
                <Tabla ingresos={ingresos} detallado={setDetallado}></Tabla>
                  )
                : (
                <div>loading</div>
                  )}
            </div>
            <div className="bg-[#FAFAFA] shadow-md h-[40%] w-[23%]"></div>
            <div className="h-min shadow-md w-[18%]">
              <form className="flex flex-col text-lg gap-5 text-white font-semibold">
                <button className="bg-[#C026D3] rounded-md py-3">Añadir Concepto</button>
                <button className="bg-[#C026D3] rounded-md py-3">Añadir Ingreso</button>
                <button className="bg-[#C026D3] rounded-md py-3">Ver Totales</button>
              </form>
            </div>
            <div className="bg-[#FAFAFA] shadow-md h-[35%] w-[55%]">
              <div className="flex flex-col h-[100%] justify-around  p-5">
                <span className="text-2xl font-bold">Ingreso Seleccionado</span>
                <div className="flex flex-row w-[100%] text-base gap-[2%] flex-wrap">
                  <div className="flex flex-col w-[49%]">
                    <div className="flex flex-row">
                      <span className="w-[40%] font-medium">Concepto</span>
                      <span className="w-[60%] text-base">
                        {detallado ? detallado.concepto.conceptoNombre : ''}
                      </span>
                    </div>
                    <div className="flex flex-row">
                      <span className="w-[40%] font-medium">Cantidad</span>
                      <span className="w-[60%] text-base">
                        {detallado ? detallado.cantidad : ''} €
                      </span>
                    </div>
                    <div className="flex flex-row ">
                      <span className="w-[40%] font-medium">Fecha</span>
                      <span className="w-[60%] text-base">{detallado ? detallado.fecha : ''}</span>
                    </div>
                    <div className="flex flex-row">
                      <span className="w-[40%] font-medium">Observaciones</span>
                      <span className="w-[60%] text-base">Alex cabron pagame lo que debes</span>
                    </div>
                  </div>
                  <div className="flex flex-col w-[49%]">
                    <div className="flex flex-row">
                      <span className="w-[40%] font-medium">Localidad</span>
                      <span className="w-[60%] text-base">Ramales</span>
                    </div>{' '}
                    <div className="flex flex-row">
                      <span className="w-[40%] font-medium">Resultado Cuenta</span>
                      <span className="w-[60%] text-base">
                        {detallado ? detallado.resultado : ''} €
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-[100%]">
                  <form
                    className="flex w-[100%] flex-row text-lg gap-[2%] text-white justify-center items-center font-semibold"
                    onSubmit={handlerSubmit}
                  >
                    <button className="bg-[#C026D3] w-[35%] rounded-md py-2">Editar</button>
                    <button
                      className="bg-[#C026D3] w-[35%] rounded-md py-2"
                      onClick={() => {
                        handlerEliminar(detallado.id.value)
                      }}
                    >
                      Eliminar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </Layout>
  )
}

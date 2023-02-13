import { useContext } from 'react'
import ContextIngreso, { IngresoActionType } from '../../context/ingresoContext'
import { deleteIngreso } from '../../service/IngresoService'
import { CajaGris } from '../CajaGris'

export const Detallado = () => {
  const { detallado, token, dispatch } = useContext(ContextIngreso)

  function handlerSubmit(event: React.FormEvent) {
    event.preventDefault()
  }

  const borrarIngreso = async () => {
    await deleteIngreso(detallado.id.value, token)
    dispatch({ type: IngresoActionType.DELETE_INGRESO, payload: { ingresos: detallado } })
  }

  return (
    <CajaGris title="Ingreso seleccionado">
      {!detallado
        ? (
        <div>loading</div>
          )
        : (
        <>
          <div className="flex flex-row text-lg py-5">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <span className="w-[40%] font-semibold">Concepto</span>
                <span className="w-[60%] text-base">{detallado.concepto.conceptoNombre}</span>
              </div>
              <div className="flex flex-row">
                <span className="w-[40%] font-semibold">Cantidad</span>
                <span className="w-[60%] text-base">{detallado.cantidad} €</span>
              </div>
              <div className="flex flex-row ">
                <span className="w-[40%] font-semibold">Fecha</span>
                <span className="w-[60%] text-base">{detallado.fecha}</span>
              </div>
              <div className="flex flex-row">
                <span className="w-[40%] font-semibold">Observaciones</span>
                <span className="w-[60%] text-base">{detallado.observacion}</span>
              </div>
            </div>
            <div className="flex flex-col w-[49%]">
              <div className="flex flex-row">
                <span className="w-[40%] font-semibold">Localidad</span>
                <span className="w-[60%] text-base">{detallado.localidad}</span>
              </div>{' '}
              <div className="flex flex-row">
                <span className="w-[40%] font-semibold">Resultado Cuenta</span>
                <span className="w-[60%] text-base">{detallado.resultado} €</span>
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
                onClick={async () => {
                  await borrarIngreso()
                }}
              >
                Eliminar
              </button>
            </form>
          </div>
        </>
          )}
    </CajaGris>
  )
}

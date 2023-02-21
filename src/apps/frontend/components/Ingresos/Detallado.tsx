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
    <CajaGris className="h-[38%] w-[60%]" title="Ingreso seleccionado">
      {!detallado
        ? (
        <div>Sin registros</div>
          )
        : (
        <>
          <div className="grid grid-cols-3 gap-10 text-lg p-5">
            <div className="grid grid-cols-1 col-span-2 grid-row-4">
              <div className="grid grid-cols-2">
                <span className="font-semibold">Concepto</span>
                <span className="">{detallado.concepto.conceptoNombre}</span>
              </div>
              <div className="grid grid-cols-2">
                <span className="font-semibold">Cantidad</span>
                <span className="">{detallado.cantidad} €</span>
              </div>
              <div className="grid grid-cols-2 ">
                <span className="font-semibold">Fecha</span>
                <span className="">{detallado.fecha}</span>
              </div>
              <div className="grid grid-cols-2">
                <span className="font-semibold">Observaciones</span>
                <span className="">{detallado.observacion}</span>
              </div>
              <div className="grid grid-cols-2">
                <span className="font-semibold">Localidad</span>
                <span className="">{detallado.localidad}</span>
              </div>{' '}
              <div className="grid grid-cols-2">
                <span className="font-semibold">Resultado Cuenta</span>
                <span className="">{detallado.resultado} €</span>
              </div>
            </div>
            <div className="grid grid-cols-1 grid-row-3 col-span-1 ">
            <div className="flex w-[100%]">
            <form
              className="flex w-[100%] flex-col text-lg gap-[10%] text-white justify-center items-center font-semibold"
              onSubmit={handlerSubmit}
            >
              <button
                className="bg-[#C026D3] w-[100%] rounded-md py-2"
              >
                Editar
              </button>
              <button
                className="bg-[#C026D3] w-[100%] rounded-md py-2"
                onClick={async () => {
                  await borrarIngreso()
                }}
              >
                Eliminar
              </button>
            </form>
          </div>
            </div>
          </div>

        </>
          )}
    </CajaGris>
  )
}

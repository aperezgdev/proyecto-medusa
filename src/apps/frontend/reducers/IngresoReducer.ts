import { IngresoActionType } from '../context/ingresoContext'
import { type Ingreso } from '../interfaces/Ingreso'
import { type IngresoState, type IngresoAction } from '../interfaces/IngresoContext'

export const reducerIngreso = (state: IngresoState, action: IngresoAction): IngresoState => {
  const { type, payload } = action

  if (type === IngresoActionType.FTC_INGRESO) return { ...state, loading: true }

  if (type === IngresoActionType.SET_INGRESOS) {
    const ingresos = [...(payload.ingresos as Ingreso[])]
    const detallado = ingresos.at(ingresos.length - 1)
    const token = payload.token ?? ''
    return { ...state, ingresos, detallado, loading: false, token }
  }

  if (type === IngresoActionType.DELETE_INGRESO) {
    const ingreso = payload.ingresos as Ingreso
    const ingresos = state.ingresos.filter((ing) => ing !== ingreso)
    return { ...state, ingresos, loading: false }
  }

  if (Array.isArray(payload)) return state

  if (type === IngresoActionType.CHG_DETALLADO) return { ...state, detallado: payload.ingresos }

  if (type === IngresoActionType.ADD_INGRESO) { return { ...state, ingresos: [...state.ingresos, payload] } }

  return state
}

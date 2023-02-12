import { createContext, useEffect, useReducer } from 'react'
import { useToken } from '../hooks/useToken'
import { type ContextIngresoI, type IngresoContextProvierProps } from '../interfaces/IngresoContext'
import { reducerIngreso } from '../reducers/IngresoReducer'
import { getIngresos } from '../service/IngresoService'

export enum IngresoActionType {
  SET_INGRESOS = 'SET_INGRESOS',
  ADD_INGRESO = 'ADD_INGRESO',
  FTC_INGRESO = 'FTC_INGRESO',
  CHG_DETALLADO = 'CHG_DETALLADO',
  UPDATE_INGRESO = 'UPDATE_INGRESO',
  DELETE_INGRESO = 'DELETE_INGRESO'
}

const DEFAULT_INGRESO_CONTEXT = {
  ingresos: [],
  detallado: undefined,
  loading: false,
  token: '',
  dispatch: () => {}
}

const ContextIngreso = createContext<ContextIngresoI>(DEFAULT_INGRESO_CONTEXT)

export const IngresoContextProvider = ({ children }: IngresoContextProvierProps) => {
  const { token, tokenLoading } = useToken()
  const [ingresosState, dispatch] = useReducer(reducerIngreso, {
    ingresos: [],
    detallado: undefined,
    loading: true,
    token: ''
  })
  const { ingresos, detallado, loading } = ingresosState

  useEffect(() => {
    if (!tokenLoading) {
      getIngresos(token)
        .then((resultado) => {
          console.log(token)
          dispatch({
            type: IngresoActionType.SET_INGRESOS,
            payload: { ingresos: [...resultado], token }
          })
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }, [tokenLoading])

  return (
    <ContextIngreso.Provider
      value={{ ingresos, detallado, loading, dispatch, token: ingresosState.token }}
    >
      {children}
    </ContextIngreso.Provider>
  )
}

export default ContextIngreso

export interface ContextIngresoI {
  ingresos: Ingreso[]
  detallado: Ingreso | undefined
  loading: boolean
  token: string
  dispatch: React.Dispatch<IngresoAction>
}

export interface IngresoState {
  ingresos: Ingreso[]
  detallado: Ingreso | undefined
  token: string
  loading: boolean
}

export interface IngresoContextProvierProps {
  children: JSX.Element
}

export interface IngresoAction {
  type: IngresoActionType
  payload: {
    ingresos: Ingreso[] | Ingreso
    token?: string
  }
}

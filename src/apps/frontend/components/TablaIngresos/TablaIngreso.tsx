import { CajaGris } from '../CajaGris'
import { Tabla } from './Tabla'

export const TablaIngresos = () => {
  return (
    <CajaGris className="h-[60%] w-[60%]" title="Diciembre">
      <Tabla />
    </CajaGris>
  )
}

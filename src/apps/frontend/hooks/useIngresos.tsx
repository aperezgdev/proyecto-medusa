import { useEffect, useState } from 'react'
import { type Ingreso } from '../interfaces/Ingreso'
import { getIngresos } from '../service/IngresoService'
import { useToken } from './useToken'

export const useIngresos = () => {
  const { tokenLoading, token } = useToken()
  const [ingresos, setIngresos] = useState<Ingreso[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!tokenLoading) {
      getIngresos(token)
        .then((resultado) => {
          setIngresos(resultado)
          setLoading(false)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }, [])

  return { loading, ingresos }
}

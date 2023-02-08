import { useEffect, useState } from 'react'
import { type Ingreso } from '../interfaces/Ingreso'
import { getIngresos } from '../service/getIngresos'
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
          console.log(resultado)
          setLoading(false)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }, [tokenLoading])

  return { loading, ingresos }
}

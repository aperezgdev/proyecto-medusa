import { useContext, useEffect, useState } from 'react'
import ContextToken from '../context/tokenContext'
import { refreshToken } from '../service/AuthService'

export const useToken = () => {
  const [tokenLoading, setTokenLoading] = useState(false)
  const { token, setToken } = useContext(ContextToken)

  useEffect(() => {
    setTokenLoading(true)
    if (token.expiresIn > new Date(Date.now())) {
      setTokenLoading(false)
    } else {
      refreshToken()
        .then((resultado) => {
          setToken({
            token: resultado.token,
            expiresIn: new Date(Date.now() + (resultado.expiresIn - 60) * 1000)
          })
          setTokenLoading(false)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [token])

  return { tokenLoading, token: token.token }
}

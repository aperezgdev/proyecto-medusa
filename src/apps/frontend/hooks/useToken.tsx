import { useContext, useEffect, useState } from 'react'
import ContextToken from '../context/tokenContext'
import { refreshToken } from '../service/AuthService'

export const useToken = () => {
  const [tokenLoading, setTokenLoading] = useState(true)
  const { token, setToken } = useContext(ContextToken)

  useEffect(() => {
    if (token.expiresIn.getMilliseconds() > new Date(Date.now() + 60 * 1000).getMilliseconds()) {
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
  }, [])

  return { tokenLoading, token: token.token }
}

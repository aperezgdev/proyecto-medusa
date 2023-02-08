import { createContext, useState } from 'react'

interface TokenContextProps {
  children?: JSX.Element
}

interface Token {
  token: string
  expiresIn: Date
}

const DEFAULT_TOKEN = {
  token: 'asd',
  expiresIn: new Date(Date.now() - (60 * 1000 * 24))
}

const DEFAULT_TOKEN_CONTEXT = {
  token: DEFAULT_TOKEN,
  setToken: () => {}
}

interface TokenContext {
  token: Token
  setToken: (token: Token) => void
}

const ContextToken = createContext<TokenContext>(DEFAULT_TOKEN_CONTEXT)

export const TokenContextProvider = ({ children }: TokenContextProps) => {
  const [token, setToken] = useState<Token>(DEFAULT_TOKEN)

  return <ContextToken.Provider value={{ token, setToken }}>{children}</ContextToken.Provider>
}

export default ContextToken

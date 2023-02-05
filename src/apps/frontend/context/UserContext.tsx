import { createContext, useState } from 'react'

interface UserContextProps {
  children?: JSX.Element
}
const ContextUser = createContext<any>(null)

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [user, setUser] = useState(null)
  return <ContextUser.Provider value={{ user, setUser }}>{children}</ContextUser.Provider>
}

export default ContextUser

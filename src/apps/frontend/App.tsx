import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Movimientos } from './pages/Movimientos'
import { Registro } from './pages/Registro'
import { Ingresos } from './pages/Ingresos'
import { UserContextProvider } from './context/UserContext'

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/movimientos" element={<Movimientos />} />
          <Route path="/ingresos" element={<Ingresos />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App

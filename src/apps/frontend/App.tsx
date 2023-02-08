import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Movimientos } from './pages/Movimientos'
import { Registro } from './pages/Registro'
import { Ingresos } from './pages/Ingresos'
import { TokenContextProvider } from './context/tokenContext'

function App() {
  return (
    <BrowserRouter>
      <TokenContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/movimientos" element={<Movimientos />} />
          <Route path="/ingresos" element={<Ingresos />} />
        </Routes>
      </TokenContextProvider>
    </BrowserRouter>
  )
}

export default App

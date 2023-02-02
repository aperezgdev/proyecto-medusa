import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Movimientos } from './pages/Movimientos'
import { Registro } from './pages/Registro'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/movimientos" element={<Movimientos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

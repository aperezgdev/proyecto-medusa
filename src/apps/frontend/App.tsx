import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Menu } from './components/Menu'
import { Login } from './pages/Login'
import { Movimientos } from './pages/Movimientos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/movimientos" element={<Movimientos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

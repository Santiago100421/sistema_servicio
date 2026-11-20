import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Alta from './pages/Alta'
import Baja from './pages/Baja'
import Estatus from './pages/Estatus'
import Login from './pages/Login'
import AdminSolicitudes from './pages/AdminSolicitudes'

// Protección mock: luego se cambia por el login real
function RutaAdmin({ children }) {
  const logueado = localStorage.getItem('admin') === 'true'
  return logueado ? children : <Navigate to="/admin/login" />
}

export default function App() {
  return (
    <>
      <nav style={{ display: 'flex', gap: 16, padding: 16 }}>
        <Link to="/">Inicio</Link>
        <Link to="/alta">Alta</Link>
        <Link to="/baja">Baja</Link>
        <Link to="/estatus">Estatus</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/alta" element={<Alta />} />
        <Route path="/baja" element={<Baja />} />
        <Route path="/estatus" element={<Estatus />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<RutaAdmin><AdminSolicitudes /></RutaAdmin>} />
      </Routes>
    </>
  )
}
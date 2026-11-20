import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const entrar = (e) => {
    e.preventDefault()
    localStorage.setItem('admin', 'true')
    navigate('/admin')
  }
  return (
    <form onSubmit={entrar} style={{ padding: 16 }}>
      <h1>Login administrador</h1>
      <input placeholder="Usuario" /><br />
      <input type="password" placeholder="Contraseña" /><br />
      <button type="submit">Entrar</button>
    </form>
  )
}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Admin from './pages/Admin.jsx'
import Coverage from './pages/Coverage.jsx'

const path = window.location.pathname.replace(/\/+$/, '')
const isAdmin = path === '/admin'
const isCoverage = path === '/coverage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isAdmin ? <Admin /> : isCoverage ? <Coverage /> : <App />}
  </StrictMode>,
)

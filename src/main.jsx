import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import N from './N.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <N />
  </StrictMode>
)

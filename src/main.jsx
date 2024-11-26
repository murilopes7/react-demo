import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BeautySalonPage from './BeautySalonPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BeautySalonPage />
  </StrictMode>,
)

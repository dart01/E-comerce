import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Propaganda from './Propaganda.jsx'
import Tendencias from './Tendencias.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Propaganda />
    <Tendencias />
    <Footer />
  </StrictMode>,
)

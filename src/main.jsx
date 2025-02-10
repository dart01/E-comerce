import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import Header from './Header.jsx'
import Propaganda from './Propaganda.jsx'
import Tendencias from './Tendencias.jsx'
import Footer from './Footer.jsx'
import Whatsapp from './Whatsapp.jsx';
import ShoppingCart from './ShoppingCart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Propaganda />
            <Whatsapp />
            <Tendencias />
            <Footer />
          </>
        } />
        <Route path="/cart" element={
          <>
            <Header />           
            <ShoppingCart />            
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  </StrictMode>,
)

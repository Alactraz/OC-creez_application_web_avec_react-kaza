import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Location from './pages/Logement'
import About from './pages/About'

import "./style.css";
import Header from './components/Header'
import Footer from './components/Footer'

const root = ReactDOMClient.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
  {/* route pour la page d'accueil */}
  <Route path="/" element={<Home />} />
  
  {/* route pour la page location */}
  <Route path="/Location" element={<Location />} />
  
  {/* route pour la page about */}
  <Route path="/about" element={<About />} />
  
  {/* route pour les URL non valides */}
  <Route path="*" element={<Error />} />
</Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
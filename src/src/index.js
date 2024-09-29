import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import "./style.css";
import Header from './layout/Header'
import Footer from './layout/Footer'

const root = ReactDOMClient.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        {/*route pour la page d'accueil*/}
        <Route path="/" element={<Home />} />
        
        {/* route pour les URL non valide */}
        <Route path="*" element={<Error />} />

      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
import React from 'react'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/navBar'
import Hero from './components/Hero'
import Colores from './components/Colores'
import Numeros from './components/Numeros'
import Saludos from './components/Saludos'
import Estaciones from './components/Estaciones'
import Animales from './components/Animales'
import Abc from './components/Abc'
import Fecha from './components/Fecha'
import Tiempo from './components/Tiempo'
import MaterialEsc from './components/MaterialEsc'
import PalabrasRel from './components/PalabrasRel'



const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Router> 
      <NavBar />  
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path="/colores" element={<Colores />} />
          <Route path='/numeros' element={<Numeros />} />
          <Route path='/saludos' element={<Saludos />} />
          <Route path='/estaciones' element={<Estaciones />} />
          <Route path='/animales' element={<Animales />} />
          <Route path='/abecedario' element={<Abc />} />
          <Route path='/fecha' element={<Fecha />} />
          <Route path='/tiempo' element={<Tiempo />} />
          <Route path='/material-escolar' element={<MaterialEsc />} />
          <Route path='/palabras-relacionadas' element={<PalabrasRel />} />
        </Routes>
      </Router>
    
    </div>
  )
}

export default App
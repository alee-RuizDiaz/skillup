import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import {Routes , Route} from 'react-router-dom'
import Listado from './components/Listado'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-gradient-to-tr from-gray-100 to-gray-300'>
      <Header/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listado" element={<Listado />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

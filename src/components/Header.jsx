import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 h-[10vh] flex items-center justify-center">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/listado"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
          >
            Listado
          </Link>
        </li>
        <li>
          <Link
            to="/contacto"
            className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header

import React from 'react'
import { est } from '../constants'

const Estaciones = () => {
   const bColor = [
        "border-[#77DD77]",
        "border-[#FFD700]",
        "border-[#8B4513]",
        "border-[#ADD8E6]"
    ]

  return (
        <div className='p-6 bg-white max-w-4xl mx-auto '> {/* Fondo blanco para la página */}
        <h3 className='text-center text-2xl font-bold mb-4'>ESTACIONES DEL AÑO</h3>
          <ul className='grid grid-cols-1 sm:grid-cols-2 gap-6 border-2 border-gray-100 shadow-md'>
            {est.map((e, index) => (
              <li key={index} className={`p-4 text-center bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105`}>
                <img 
                  src={e.img} 
                  alt={e.name} 
                  className={`w-full h-96 border-4 object-contain rounded mb-2 transition duration-300 hover:border-4 ${bColor[index]}`} // Borde según el color de hover
                />
                <span className="font-bold text-[#fe6622]">{e.name}</span> {/* Texto en color naranja */}
              </li>
            ))}
          </ul>
        </div>
  )
}

export default Estaciones
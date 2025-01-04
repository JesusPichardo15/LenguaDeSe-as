import React from 'react';
import { todosColores } from '../constants/col';

const Colores = () => {
  return (
    <div className='p-6 bg-white max-w-4xl mx-auto'>
      <h3 className='text-center text-2xl font-bold mb-4'>COLORES</h3>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 border-2 border-gray-100 shadow-md'>
        {todosColores.map((color, index) => (
          <li key={index} className={`p-4 text-center bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105`}>
            <img 
              src={color.image} 
              alt={color.name} 
              className={`w-full h-48 sm:h-56 md:h-64 lg:h-72 border-4 object-contain rounded mb-2 transition duration-300 hover:border-4 border-[${color.hoverColor}]`} 
            />
            <span className="font-bold text-[#fe6622]">{color.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Colores;
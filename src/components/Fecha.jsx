import React from 'react';
import { diasDeLaSemana, mesesDelAno } from '../constants/fecha';

const Fecha = () => {
  return (
    <div className='p-6 bg-white max-w-4xl mx-auto'>
      <h3 className='text-center text-2xl font-bold mb-4'>DIAS DE LA SEMANA</h3>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 border-2 border-gray-100 shadow-md'>
        {diasDeLaSemana.map((item, index) => (
          <li key={index} className={`p-4 text-center bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105`}>
            <img 
              src={item.img} 
              alt={item.name} 
              className={`w-full h-48 sm:h-56 md:h-64 lg:h-72 border-4 object-contain rounded mb-2 transition duration-300 border-[${item.hoverColor}]`} 
            />
            <span className="font-bold text-[#fe6622] text-xl my-4">{item.name}</span>
          </li>
        ))}
      </ul>
      <h3 className='text-center text-2xl font-bold my-4'>MESES DEL AÑO</h3>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 border-2 border-gray-100 shadow-md'>
        {mesesDelAno.map((item, index) => (
          <li key={index} className={`p-4 text-center bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105`}>
            <img 
              src={item.img} 
              alt={item.name} 
              className={`w-full h-48 sm:h-56 md:h-64 lg:h-72 border-4 object-contain rounded mb-2 transition duration-300 border-[${item.hoverColor}]`} 
            />
            <span className="font-bold text-[#fe6622] text-xl my-4">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fecha;
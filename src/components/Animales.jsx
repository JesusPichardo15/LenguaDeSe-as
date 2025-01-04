import React from 'react';
import { anim } from '../constants/animales';

const Animales = () => {
  return (
    <div className='p-6 bg-white max-w-4xl mx-auto'>
      <h3 className='text-center text-2xl font-bold mb-4'>ANIMALES</h3>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 border-2 border-gray-100 shadow-md'>
        {anim.map((animal, index) => (
          <li key={index} className={`p-4 text-center bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105`}>
            <img 
              src={animal.img} 
              alt={animal.name} 
              className={`w-full h-48 sm:h-56 md:h-64 lg:h-72 border-4 object-contain rounded mb-2 transition duration-300 border-[${animal.hoverColor}]`} 
            />
            <span className="font-bold text-[#fe6622]">{animal.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Animales;
import React from 'react';
import { todosNumeros } from '../constants/num';

const Numeros = () => {
  const hoverColors = [
    "border-[#febe0f]",  
    "border-[#ffa4bf]",  
    "border-[#fe6622]",  
    "border-[#4580b2]",  
    "border-[#00a56b]",  
    "border-[#febe0f]",  
    "border-[#ffa4bf]", 
    "border-[#fe6622]", 
    "border-[#4580b2]", 
    "border-[#00a 56b]",  
    "border-[#febe0f]",  
    "border-[#ffa4bf]",  
    "border-[#fe6622]",  
    "border-[#4580b2]", 
    "border-[#00a56b]",  
    "border-[#febe0f]", 
    "border-[#ffa4bf]", 
    "border-[#fe6622]", 
    "border-[#4580b2]", 
    "border-[#00a56b]", 
    "border-[#febe0f]", 
    "border-[#ffa4bf]", 
    "border-[#fe6622]", 
    "border-[#4580b2]", 
    "border-[#00a56b]", 
    "border-[#febe0f]", 
    "border-[#ffa4bf]", 
    "border-[#fe6622]", 
    "border-[#4580b2]", 
    "border-[#00a56b]", 
  ];

  return (
    <div className='p-6 bg-white max-w-4xl mx-auto'>
      <h3 className='text-center text-2xl font-bold mb-4'>NUMEROS</h3>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 border-2 border-gray-100 shadow-md'>
        {todosNumeros.map((num, index) => (
          <li key={index} className={`p-4 text-center bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105`}>
            <img 
              src={num.image} 
              alt={num.name} 
              className={`w-full h-48 sm:h-56 md:h-64 lg:h-72 border-4 object-contain rounded mb-2 transition duration-300 ${hoverColors[index % hoverColors.length]}`} 
            />
            <span className="font-bold text-[#fe6622]">{num.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Numeros;
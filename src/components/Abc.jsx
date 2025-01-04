import React from 'react';
import { abecedario } from '../constants/abc'; 

const Abc = () => {
   return (
     <div className='p-6 bg-white max-w-4xl mx-auto'> {/* Fondo blanco para la página */}
       <h3 className='text-center text-2xl font-bold mb-4'>ABECEDARIO</h3>
       <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 border-2 border-gray-100 shadow-md'>
         {abecedario.map((item, index) => (
           <li key={index} className={`p-4 text-center bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105`}>
             <img 
               src={item.img} 
               alt={item.name} 
               className={`w-full h-48 sm:h-56 md:h-64 lg:h-72 border-4 object-contain rounded mb-2 border-[${item.hoverColor}]`} // Borde según el color de hover
             />
             <span className="font-bold text-[#fe6622]">{item.name}</span> {/* Texto en color naranja */}
           </li>
         ))}
       </ul>
     </div>
   );
}

export default Abc;
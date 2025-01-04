import React from 'react'
import { LSM_CONTENT, MITOS_CONTENT, TERMINO_CONTENT, NIVELES_CONTENT } from '../constants'

const Hero = () => {
  return (
<div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">{LSM_CONTENT.title}</h1>
        <p className="text-gray-600 mt-2">{LSM_CONTENT.content}</p>
      </div>
      <div className="flex items-center mb-8">
        <div className="flex-1 pr-4">
          <h1 className="text-2xl font-bold text-gray-800">{TERMINO_CONTENT.title}</h1>
          <p className="text-gray-600 mt-2">{TERMINO_CONTENT.content}</p>
        </div>
        <img src={TERMINO_CONTENT.image} alt="Termino correcto" className="w-1/2 rounded shadow-lg border-2 border-yellow-300" />
      </div>
      <div className="flex items-center mb-8">
        <img src={NIVELES_CONTENT.image} alt="Niveles de audición" className="w-1/2 rounded shadow-lg border-2 border-pink-300" />
        <div className="flex-1 pl-4">
          <h1 className="text-2xl font-bold text-gray-800">{NIVELES_CONTENT.title}</h1>
          <p className="text-gray-600 mt-2">{NIVELES_CONTENT.content}</p>
        </div>
      </div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">{MITOS_CONTENT.title}</h1>
        <p className="text-gray-600 mt-2">{MITOS_CONTENT.content}</p>
      </div>
    </div>
  );
}

export default Hero
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-5 shadow-md mb-2">
      <h1 className="text-3xl font-bold text-center">Lengua de Señas</h1>
      <button 
        className="md:hidden text-lg font-medium py-2 px-4 rounded transition duration-300 cursor-pointer border-b-4 border-transparent hover:border-blue-500"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>
      <ul className={`flex flex-wrap justify-center space-x-8 mt-4 ${isOpen ? 'block' : 'hidden md:flex'}`}>
        {[
          { name: 'Colores', path: '/colores', hoverColor: 'hover:border-yellow-300' },
          { name: 'Números', path: '/numeros', hoverColor: 'hover:border-pink-300' },
          { name: 'Saludos', path: '/saludos', hoverColor: 'hover:border-orange-500' },
          { name: 'Estaciones', path: '/estaciones', hoverColor: 'hover:border-blue-500' },
          { name: 'Animales', path: '/animales', hoverColor: 'hover:border-green-500' },
          { name: 'Abecedario', path: '/abecedario', hoverColor: 'hover:border-yellow-300' },
          { name: 'Fecha', path: '/fecha', hoverColor: 'hover:border-pink-300' },
          { name: 'Tiempo', path: '/tiempo', hoverColor: 'hover:border-orange-500' },
          { name: 'Material Escolar', path: '/material-escolar', hoverColor: 'hover:border-blue-500' },
          { name: 'Palabras Relacionadas', path: '/palabras-relacionadas', hoverColor: 'hover:border-green-500' },
        ].map((item, index) => (
          <li
            key={index}
            className={`text-lg font-medium py-2 px-4 rounded transition duration-300 cursor-pointer border-b-4 border-transparent ${item.hoverColor} animate-border-pulse`}
            onClick={() => navigate(item.path)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
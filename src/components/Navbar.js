import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">SAY NO MORE</div>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`sm:flex ${isOpen ? 'block' : 'hidden'}`}>
        <button className="block text-white mt-2 sm:mt-0 sm:ml-4">Inicio</button>
        <button className="block text-white mt-2 sm:mt-0 sm:ml-4">Perfil</button>
        <button className="block text-white mt-2 sm:mt-0 sm:ml-4">Cerrar Sesión</button>
      </div>
    </nav>
  );
}

export default Navbar;
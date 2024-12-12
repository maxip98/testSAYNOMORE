import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 rounded bg-black text-white">
      <div className="text-lg font-bold">Say NO MORE</div>
      <a href="#" className="text-sm italic">Cerrar Sesión</a>
    </nav>
  );
};

export default Navbar;
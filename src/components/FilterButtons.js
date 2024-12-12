import React from 'react';

function FilterButtons({ filter, setFilter }) {
  return (
    <div className="flex justify-around mb-4">
      <button onClick={() => setFilter('all')} className={`p-2 ${filter === 'all' ? 'border-b-2 border-blue-500' : ''}`}>Todos</button>
      <button onClick={() => setFilter('pendiente')} className={`p-2 ${filter === 'pendiente' ? 'border-b-2 border-blue-500' : ''}`}>Pendientes</button>
      <button onClick={() => setFilter('terminado')} className={`p-2 ${filter === 'terminado' ? 'border-b-2 border-blue-500' : ''}`}>Terminados</button>
    </div>
  );
}

export default FilterButtons;
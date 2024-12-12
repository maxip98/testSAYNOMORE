import React from 'react';

function Tabs({ activeTab, setActiveTab, editIndex }) {
  return (
    <div className="flex justify-around border-b mb-4">
      <button
        className={`p-2 ${activeTab === 'list' ? 'border-b-2 border-blue-500' : ''}`}
        onClick={() => setActiveTab('list')}
      >
        Listado de Pedidos
      </button>
      <button
        className={`p-2 ${activeTab === 'form' ? 'border-b-2 border-blue-500' : ''}`}
        onClick={() => setActiveTab('form')}
      >
        {editIndex !== null ? 'Editar Pedido' : 'Agregar Pedido'}
      </button>
      <button
        className={`p-2 ${activeTab === 'advancedSearch' ? 'border-b-2 border-blue-500' : ''}`}
        onClick={() => setActiveTab('advancedSearch')}
      >
        Búsqueda Avanzada
      </button>
    </div>
  );
}

export default Tabs;
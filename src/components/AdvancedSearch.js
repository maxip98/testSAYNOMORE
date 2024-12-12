import React, { useState } from 'react';

function AdvancedSearch({ pedidos, setFilteredPedidos, setActiveTab, setShowClearFilter }) {
  const [searchParams, setSearchParams] = useState({
    fechaInicio: '',
    fechaFin: '',
    estado: '',
    prioridad: '',
    local: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSearch = () => {
    let filtered = pedidos;

    if (searchParams.fechaInicio) {
      filtered = filtered.filter(pedido => new Date(pedido.fecha) >= new Date(searchParams.fechaInicio));
    }

    if (searchParams.fechaFin) {
      filtered = filtered.filter(pedido => new Date(pedido.fecha) <= new Date(searchParams.fechaFin));
    }

    if (searchParams.estado) {
      filtered = filtered.filter(pedido => searchParams.estado === 'pendiente' ? pedido.pendiente : !pedido.pendiente);
    }

    if (searchParams.prioridad) {
      filtered = filtered.filter(pedido => pedido.prioridad === searchParams.prioridad);
    }

    if (searchParams.local) {
      filtered = filtered.filter(pedido => pedido.local === searchParams.local);
    }

    setFilteredPedidos(filtered);
    setActiveTab('list');
    setShowClearFilter(true);
  };

  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Búsqueda Avanzada</h2>
      <div className="mb-4">
        <label className="block mb-2">Fecha de Inicio</label>
        <input
          type="date"
          name="fechaInicio"
          value={searchParams.fechaInicio}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Fecha de Fin</label>
        <input
          type="date"
          name="fechaFin"
          value={searchParams.fechaFin}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Estado</label>
        <select
          name="estado"
          value={searchParams.estado}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Seleccionar Estado</option>
          <option value="pendiente">Pendiente</option>
          <option value="terminado">Terminado</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Prioridad</label>
        <select
          name="prioridad"
          value={searchParams.prioridad}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Seleccionar Prioridad</option>
          <option value="baja">Baja</option>
          <option value="media">Media</option>
          <option value="alta">Alta</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Local</label>
        <select
          name="local"
          value={searchParams.local}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Seleccionar Local</option>
          <option value="Local 1">Local 1</option>
          <option value="Local 2">Local 2</option>
          <option value="Local 3">Local 3</option>
        </select>
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleSearch}
      >
        Buscar
      </button>
    </div>
  );
}

export default AdvancedSearch;
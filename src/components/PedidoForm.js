import React, { useState, useEffect } from 'react';

function PedidoForm({ onAdd, onSave, editPedido, setEditPedido, isEditing }) {
  const [localPedido, setLocalPedido] = useState({ pedido: '', descripcion: '', local: '', prioridad: '' });

  useEffect(() => {
    if (isEditing) {
      setLocalPedido(editPedido);
    } else {
      setLocalPedido({ pedido: '', descripcion: '', local: '', prioridad: '' });
    }
  }, [editPedido, isEditing]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalPedido({ ...localPedido, [name]: value });
  };

  const handleSubmit = () => {
    if (isEditing) {
      onSave(localPedido);
    } else {
      onAdd(localPedido);
      setLocalPedido({ pedido: '', descripcion: '', local: '', prioridad: '' });
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">{isEditing ? 'Editar Pedido' : 'Agregar Nuevo Pedido'}</h2>
      <select
        name="local"
        value={localPedido.local}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border rounded"
      >
        <option value="" disabled>Seleccionar Local</option>
        <option value="Local 1">Local 1</option>
        <option value="Local 2">Local 2</option>
        <option value="Local 3">Local 3</option>
      </select>
      <input
        type="text"
        name="pedido"
        value={localPedido.pedido}
        onChange={handleInputChange}
        placeholder="Pedido"
        className="w-full p-2 mb-4 border rounded"
      />
      <textarea
        name="descripcion"
        value={localPedido.descripcion}
        onChange={handleInputChange}
        placeholder="Descripción"
        className="w-full p-2 mb-4 border rounded"
      />
      <select
        name="prioridad"
        value={localPedido.prioridad}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border rounded"
      >
        <option value="" disabled>Seleccionar Prioridad</option>
        <option value="baja">Baja</option>
        <option value="media">Media</option>
        <option value="alta">Alta</option>
      </select>
      <button
        className="bg-gray-500 text-white p-2 rounded mb-4"
        disabled
      >
        Podes subir fotos y videos para entender mejor el problema
      </button>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleSubmit}
      >
        {isEditing ? 'Guardar' : 'Agregar'}
      </button>
    </div>
  );
}

export default PedidoForm;
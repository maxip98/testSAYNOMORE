import React from 'react';

const PedidoForm = ({ newPedido, formErrors, handleInputChange, handleAddPedido, setPopupOpen }) => {
  return (
    <div className="mt-4">
      <p>Si el problema es en una heladera, freezer o aire acondicionado, lee el siguiente instructivo:</p>
      <button
        className="bg-black text-white p-2 rounded mt-2"
        onClick={() => setPopupOpen(true)}
      >
        Leer
      </button>
      <input
        type="text"
        name="pedido"
        value={newPedido.pedido}
        onChange={handleInputChange}
        placeholder="Pedido"
        className="w-full p-2 mb-2 border rounded mt-4"
      />
      {formErrors.pedido && <p className="text-red-500 text-sm">{formErrors.pedido}</p>}
      <textarea
        name="descripcion"
        value={newPedido.descripcion}
        onChange={handleInputChange}
        placeholder="Descripción"
        className="w-full p-2 mb-2 border rounded"
      />
      {formErrors.descripcion && <p className="text-red-500 text-sm">{formErrors.descripcion}</p>}
      <select
        name="prioridad"
        value={newPedido.prioridad}
        onChange={handleInputChange}
        className="w-full p-2 mb-2 border rounded"
      >
        <option value="">Elije la prioridad</option>
        <option value="baja">Baja</option>
        <option value="media">Media</option>
        <option value="alta">Alta</option>
      </select>
      {formErrors.prioridad && <p className="text-red-500 text-sm">{formErrors.prioridad}</p>}
      <button
        className="bg-blue-500 text-white p-2 rounded mt-2"
        onClick={handleAddPedido}
      >
        Agregar
      </button>
    </div>
  );
};

export default PedidoForm;
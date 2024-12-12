import React from 'react';

function PedidoItem({ pedido, onDelete, onEdit, onToggle }) {
  return (
    <div className="shadow-lg p-4 mb-4 bg-white rounded">
      <p><strong>Local:</strong> {pedido.local}</p>
      <p><strong>Fecha:</strong> {pedido.fecha}</p>
      <p><strong>Pedido:</strong> {pedido.pedido}</p>
      <p><strong>Descripción:</strong> {pedido.descripcion}</p>
      <p><strong>Prioridad:</strong> {pedido.prioridad}</p>
      {pedido.fechaCompletado && <p><strong>Fecha Completado:</strong> {pedido.fechaCompletado}</p>}
      <label>
        <input
          type="checkbox"
          checked={!pedido.pendiente}
          onChange={onToggle}
        />
        {pedido.pendiente ? ' Pendiente' : ' Terminado'}
      </label>
      <button onClick={onEdit} className="bg-yellow-500 text-white p-2 rounded ml-2">Editar</button>
      <button onClick={onDelete} className="bg-red-500 text-white p-2 rounded ml-2">Eliminar</button>
    </div>
  );
}

export default PedidoItem;
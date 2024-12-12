import React from 'react';
import PedidoItem from './PedidoItem';

function PedidoList({ pedidos, onDelete, onEdit, onToggle }) {
  return (
    <div className="overflow-y-scroll max-h-96">
      {pedidos.map((pedido, index) => (
        <PedidoItem 
          key={index} 
          pedido={pedido} 
          onDelete={() => onDelete(index)} 
          onEdit={() => onEdit(index)} 
          onToggle={() => onToggle(index)} 
        />
      ))}
    </div>
  );
}

export default PedidoList;
import React from 'react';

const PedidoList = ({ pedidos, setPedidos }) => {
  return (
    <div className="overflow-y-scroll max-h-96">
      {pedidos.map((pedido, index) => (
        <div key={index} className="shadow-lg p-4 mb-4 bg-white rounded">
          <p><strong>Fecha:</strong> {pedido.fecha}</p>
          <p><strong>Pedido:</strong> {pedido.pedido}</p>
          <p><strong>Descripción:</strong> {pedido.descripcion}</p>
          <p><strong>Prioridad:</strong> {pedido.prioridad}</p>
          <label>
            <input
              type="checkbox"
              checked={!pedido.pendiente}
              onChange={() => {
                const updatedPedidos = [...pedidos];
                updatedPedidos[index].pendiente = !updatedPedidos[index].pendiente;
                setPedidos(updatedPedidos);
              }}
            />
            {pedido.pendiente ? ' Pendiente' : ' Terminado'}
          </label>
        </div>
      ))}
    </div>
  );
};

export default PedidoList;
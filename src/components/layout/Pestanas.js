import React, { useState } from 'react';
import '../../App.css';

function App() {
  const [pedidos, setPedidos] = useState([]);
  const [activeTab, setActiveTab] = useState('list');
  const [newPedido, setNewPedido] = useState({ pedido: '', descripcion: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPedido({ ...newPedido, [name]: value });
  };

  const handleAddPedido = () => {
    const fecha = new Date().toLocaleDateString();
    setPedidos([{ ...newPedido, fecha, pendiente: true }, ...pedidos]);
    setNewPedido({ pedido: '', descripcion: '' });
    setActiveTab('list');
  };

  return (
    <div className="App p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Pedidos</h1>
      
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
          Agregar Pedido
        </button>
      </div>

      {activeTab === 'list' && (
        <div className="overflow-y-scroll max-h-96">
          {pedidos.map((pedido, index) => (
            <div key={index} className="shadow-lg p-4 mb-4 bg-white rounded">
              <p><strong>Fecha:</strong> {pedido.fecha}</p>
              <p><strong>Pedido:</strong> {pedido.pedido}</p>
              <p><strong>Descripción:</strong> {pedido.descripcion}</p>
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
      )}

      {activeTab === 'form' && (
        <div className="p-4 bg-white rounded shadow-lg">
          <h2 className="text-xl font-bold mb-4">Agregar Nuevo Pedido</h2>
          <input
            type="text"
            name="pedido"
            value={newPedido.pedido}
            onChange={handleInputChange}
            placeholder="Pedido"
            className="w-full p-2 mb-4 border rounded"
          />
          <textarea
            name="descripcion"
            value={newPedido.descripcion}
            onChange={handleInputChange}
            placeholder="Descripción"
            className="w-full p-2 mb-4 border rounded"
          />
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={handleAddPedido}
          >
            Agregar
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import '../../App.css';

function App() {
    const [pedidos, setPedidos] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [newPedido, setNewPedido] = useState({ pedido: '', descripcion: '' });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewPedido({ ...newPedido, [name]: value });
    };
  
    const handleAddPedido = () => {
      const fecha = new Date().toLocaleDateString();
      setPedidos([...pedidos, { ...newPedido, fecha, pendiente: true }]);
      setNewPedido({ pedido: '', descripcion: '' });
      setModalOpen(false);
    };
  
    return (
      <div className="App p-4">
        <h1 className="text-2xl font-bold mb-4">Listado de Pedidos</h1>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Fecha</th>
              <th className="py-2">Pedido</th>
              <th className="py-2">Descripción</th>
              <th className="py-2">Estado</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido, index) => (
              <tr key={index} className="border-t">
                <td className="py-2">{pedido.fecha}</td>
                <td className="py-2">{pedido.pedido}</td>
                <td className="py-2">{pedido.descripcion}</td>
                <td className="py-2">
                  <input
                    type="checkbox"
                    checked={!pedido.pendiente}
                    onChange={() => {
                      const updatedPedidos = [...pedidos];
                      updatedPedidos[index].pendiente = !updatedPedidos[index].pendiente;
                      setPedidos(updatedPedidos);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <button
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg"
          onClick={() => setModalOpen(true)}
        >
          + Nuevo Pedido
        </button>
  
        {modalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg w-3/4 max-w-md">
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
              <button
                className="bg-red-500 text-white p-2 rounded ml-2"
                onClick={() => setModalOpen(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default App;
  
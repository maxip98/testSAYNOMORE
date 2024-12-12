import React, { useState } from 'react';
import "./App.css";

import Navbar from './components/layout/Navbar';
import PedidoForm from './components/layout/PedidoForm';
import PedidoList from './components/layout/PedidoList';
import InstructivoPopup from './components/layout/InstructivoPopup';


function App() {
  const [pedidos, setPedidos] = useState([]);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [newPedido, setNewPedido] = useState({ pedido: '', descripcion: '', prioridad: '' });
  const [formErrors, setFormErrors] = useState({ pedido: '', descripcion: '', prioridad: '' });
  const [popupOpen, setPopupOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPedido({ ...newPedido, [name]: value });
    setFormErrors({ ...formErrors, [name]: value ? '' : 'Este campo es obligatorio' });
  };

  const handleAddPedido = () => {
    const { pedido, descripcion, prioridad } = newPedido;
    if (!pedido || !descripcion || !prioridad) {
      setFormErrors({
        pedido: !pedido ? 'Este campo es obligatorio' : '',
        descripcion: !descripcion ? 'Este campo es obligatorio' : '',
        prioridad: !prioridad ? 'Este campo es obligatorio' : ''
      });
      return;
    }
    const fecha = new Date().toLocaleDateString();
    setPedidos([{ ...newPedido, fecha, pendiente: true }, ...pedidos]);
    setNewPedido({ pedido: '', descripcion: '', prioridad: '' });
    setAccordionOpen(false);
  };

  return (
    <div className="App p-4">
      <Navbar />
      <h1 className="text-2xl font-bold my-4 text-center">Local: Bar Say-Mons </h1>
      <h3 className="font-bold my-4 text-center">Direccion: General Paz y Huergo </h3>
      <div className="border rounded p-4 mb-4">
        <button
          className="w-full text-left font-bold flex items-center justify-between"
          onClick={() => setAccordionOpen(!accordionOpen)}
        >
          {accordionOpen ? 'Cerrar Formulario' : 'Agregar Nuevo Pedido'}
          <span className="bg-black text-white rounded-full p-2 ml-2">+</span>
        </button>
        {accordionOpen && (
          <PedidoForm
            newPedido={newPedido}
            formErrors={formErrors}
            handleInputChange={handleInputChange}
            handleAddPedido={handleAddPedido}
            setPopupOpen={setPopupOpen}
          />
        )}
      </div>
      <PedidoList pedidos={pedidos} setPedidos={setPedidos} />
      {popupOpen && <InstructivoPopup setPopupOpen={setPopupOpen} />}
    </div>
  );
}

export default App;

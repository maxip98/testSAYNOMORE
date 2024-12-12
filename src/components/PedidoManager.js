import React, { useState } from 'react';
import PedidoLogic from './PedidoLogic';
import ModalManager from './ModalManager';

function PedidoManager() {
  const [pedidos, setPedidos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Pedidos</h1>
      <PedidoLogic 
        setShowModal={setShowModal} 
        setCurrentIndex={setCurrentIndex} 
        pedidos={pedidos} 
        setPedidos={setPedidos} 
      />
      <ModalManager 
        pedidos={pedidos} 
        setPedidos={setPedidos} 
        showModal={showModal} 
        setShowModal={setShowModal} 
        currentIndex={currentIndex} 
        setCurrentIndex={setCurrentIndex} 
      />
    </div>
  );
}

export default PedidoManager;
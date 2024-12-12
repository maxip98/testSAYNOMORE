import React, { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';

function ModalManager({ pedidos, setPedidos }) {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const confirmTogglePedido = () => {
    const updatedPedidos = [...pedidos];
    const currentPedido = updatedPedidos[currentIndex];
    currentPedido.pendiente = !currentPedido.pendiente;
    if (!currentPedido.pendiente) {
      currentPedido.fechaCompletado = new Date().toLocaleDateString();
    } else {
      delete currentPedido.fechaCompletado;
    }
    setPedidos(updatedPedidos);
    setShowModal(false);
    setCurrentIndex(null);
  };

  return (
    <>
      {showModal && (
        <ConfirmationModal 
          onConfirm={confirmTogglePedido} 
          onCancel={() => setShowModal(false)} 
          isPending={pedidos[currentIndex]?.pendiente}
        />
      )}
    </>
  );
}

export default ModalManager;
import React from 'react';

function ConfirmationModal({ onConfirm, onCancel, isPending }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Confirmación</h2>
        <p>¿Estás seguro de que quieres {isPending ? 'completar' : 'volver a pendiente'} esta tarea?</p>
        <div className="flex justify-end mt-4">
          <button onClick={onCancel} className="bg-gray-500 text-white p-2 rounded mr-2">Cancelar</button>
          <button onClick={onConfirm} className="bg-blue-500 text-white p-2 rounded">Confirmar</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
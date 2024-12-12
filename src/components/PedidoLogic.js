import React, { useState, useEffect } from 'react';
import PedidoForm from './PedidoForm';
import PedidoList from './PedidoList';
import SearchBar from './SearchBar';
import Tabs from './Tabs';
import FilterButtons from './FilterButtons';
import AdvancedSearch from './AdvancedSearch';

function PedidoLogic({ setShowModal, setCurrentIndex }) {
  const [pedidos, setPedidos] = useState([]);
  const [activeTab, setActiveTab] = useState('list');
  const [editIndex, setEditIndex] = useState(null);
  const [editPedido, setEditPedido] = useState({ pedido: '', descripcion: '', local: '', prioridad: 'baja' });
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPedidos, setFilteredPedidos] = useState([]);
  const [showClearFilter, setShowClearFilter] = useState(false);

  useEffect(() => {
    const savedPedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    setPedidos(savedPedidos);
    setFilteredPedidos(savedPedidos);
  }, []);

  useEffect(() => {
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
  }, [pedidos]);

  const handleAddPedido = (newPedido) => {
    const fecha = new Date().toLocaleDateString();
    setPedidos([{ ...newPedido, fecha, pendiente: true }, ...pedidos]);
    setActiveTab('list');
  };

  const handleDeletePedido = (index) => {
    const updatedPedidos = pedidos.filter((_, i) => i !== index);
    setPedidos(updatedPedidos);
    setFilteredPedidos(updatedPedidos);
  };

  const handleEditPedido = (index) => {
    setEditIndex(index);
    setEditPedido(pedidos[index]);
    setActiveTab('form');
  };

  const handleSaveEdit = (updatedPedido) => {
    const updatedPedidos = [...pedidos];
    updatedPedidos[editIndex] = updatedPedido;
    setPedidos(updatedPedidos);
    setFilteredPedidos(updatedPedidos);
    setEditIndex(null);
    setEditPedido({ pedido: '', descripcion: '', local: '', prioridad: 'baja' });
    setActiveTab('list');
  };

  const handleTogglePedido = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleClearFilter = () => {
    setFilteredPedidos(pedidos);
    setShowClearFilter(false);
  };

  const filteredPedidosList = pedidos.filter(pedido => {
    if (filter === 'all') return true;
    return filter === 'pendiente' ? pedido.pendiente : !pedido.pendiente;
  }).filter(pedido => 
    pedido.pedido.toLowerCase().includes(searchQuery.toLowerCase()) || 
    pedido.descripcion.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pedido.local.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pedido.prioridad.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pedido.fecha.includes(searchQuery)
  );

  useEffect(() => {
    setFilteredPedidos(filteredPedidosList);
  }, [searchQuery, filter, pedidos, filteredPedidosList]);

  return (
    <>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} editIndex={editIndex} />

      {activeTab === 'list' && (
        <>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <FilterButtons filter={filter} setFilter={setFilter} />
          {showClearFilter && (
            <button
              className="bg-red-500 text-white p-2 rounded mb-4"
              onClick={handleClearFilter}
            >
              Quitar Filtrado
            </button>
          )}
          <PedidoList 
            pedidos={filteredPedidos} 
            onDelete={handleDeletePedido} 
            onEdit={handleEditPedido} 
            onToggle={handleTogglePedido}
          />
        </>
      )}

      {activeTab === 'form' && (
        <PedidoForm 
          onAdd={handleAddPedido} 
          onSave={handleSaveEdit} 
          editPedido={editPedido} 
          setEditPedido={setEditPedido} 
          isEditing={editIndex !== null}
        />
      )}

      {activeTab === 'advancedSearch' && (
        <AdvancedSearch 
          pedidos={pedidos} 
          setFilteredPedidos={setFilteredPedidos} 
          setActiveTab={setActiveTab}
          setShowClearFilter={setShowClearFilter}
        />
      )}
    </>
  );
}

export default PedidoLogic;
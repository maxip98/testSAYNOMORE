import React from 'react';
import Navbar from './components/Navbar';
import PedidoManager from './components/PedidoManager';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PedidoManager />
    </div>
  );
}

export default App;
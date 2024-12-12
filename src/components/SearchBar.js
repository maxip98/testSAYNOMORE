import React from 'react';

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Buscar pedidos..."
        className="w-full p-2 border rounded"
      />
      <svg className="w-6 h-6 ml-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </div>
  );
}

export default SearchBar;
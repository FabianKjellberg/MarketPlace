import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('product name');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchByChange = (event) => {
    setSearchBy(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Anta att onSearch gör något (som att logga eller förbereda data)
    onSearch(searchTerm, searchBy); //DELA UPP TILL OLIKA METODER

    // Använd `window.location.href` för att bygga URL med sökparametrar
    window.location.href = `/search?term=${encodeURIComponent(searchTerm)}&by=${encodeURIComponent(searchBy)}`;
  };

  return (
    <form onSubmit={handleSubmit} className='search-bar'>
      <input
        type="text"
        placeholder={`Search by ${searchBy}...`}
        className="search-input"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <select className="search-select" value={searchBy} onChange={handleSearchByChange}>
        <option value="product name">name</option>
        <option value="price">price</option>
        <option value="condition">condition</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;

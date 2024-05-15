import React, { useState } from 'react';
import './SearchBar.css'


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
    onSearch(searchTerm, searchBy);  
  };

  return (
    <div className='search-bar'>
      <input
        type="text"
        placeholder={`Search by ${searchBy}...`}
        className="search-input"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <select className="search-select" value={searchBy} onChange={handleSearchByChange}>
        <option value="product name">Name </option>
        <option value="price">Price</option>
        <option value="condition">Condition</option>
      </select>
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default SearchBar;

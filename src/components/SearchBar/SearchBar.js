import React, { useState } from 'react';
import ProductListing from '../ProductListing/ProductListing';
import './SearchBar.css';
import { useSearch } from '../../components/SearchBar/SearchContext'; 

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('Name');
  const { setSearchParams } = useSearch();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchByChange = (event) => {
    setSearchBy(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ term: searchTerm, by: searchBy }); // Uppdatera sökparametrarna i context
    console.log("search: " + searchTerm)
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
        <option value="Name">name</option>
        <option value="PriceRange">price</option>
        <option value="Condition">condition</option>
      </select>
      <button type="submit">Search</button>
      
       
    </form>
  );
}

export default SearchBar;

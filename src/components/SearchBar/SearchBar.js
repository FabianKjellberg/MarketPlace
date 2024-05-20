import React, { useState } from 'react';
import ProductListing from '../ProductListing/ProductListing';
import './SearchBar.css';
import { useSearch } from '../../components/SearchBar/SearchContext'; 

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('Name');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const { setSearchParams } = useSearch();

  const handleInputChange = (event) => {
    if (searchBy === 'PriceRange') {
      if (event.target.name === 'minPrice') {
        setMinPrice(event.target.value);
      } else if (event.target.name === 'maxPrice') {
        setMaxPrice(event.target.value);
      }
    } else {
      setSearchTerm(event.target.value);
    }
  };

  const handleSearchByChange = (event) => {
    setSearchBy(event.target.value);
    if (event.target.value !== 'PriceRange') {
      setMinPrice('');
      setMaxPrice('');
      setSearchTerm('');
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    let currentSearchTerm = searchBy === 'PriceRange' ? `${minPrice}-${maxPrice}` : searchTerm;
    setSearchParams({ term: currentSearchTerm, by: searchBy }); 
    console.log("searchbar.js search: " + currentSearchTerm)
  };


  return (
    <form onSubmit={handleSubmit} className='search-bar'>
      {searchBy === 'PriceRange' ? (
        <>
          <input
            type="number"
            name="minPrice"
            placeholder="Min price"
            className="search-input"
            value={minPrice}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="maxPrice"
            placeholder="Max price"
            className="search-input"
            value={maxPrice}
            onChange={handleInputChange}
          />
        </>
      ) : searchBy === 'Condition' ? (
        <select className="search-input" value={searchTerm} onChange={handleInputChange}>
          <option value="">Select Condition</option>
          <option value="new">New</option>
          <option value="used-very-good">Used - Very good</option>
          <option value="used-good">Used - Good</option>
          <option value="used-fair">Used - Fair</option>
          <option value="used-bad">Used - Bad</option>
        </select>
      ) : (
        <input
          type="text"
          placeholder={`Search by ${searchBy}...`}
          className="search-input"
          value={searchTerm}
          onChange={handleInputChange}
        />
      )}
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
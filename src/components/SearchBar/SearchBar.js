import React, { useState } from 'react';
import ProductListing from '../ProductListing/ProductListing';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  //const [searchBy, setSearchBy] = useState('product name');
  const [searchBy, setSearchBy] = useState('Name');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchByChange = (event) => {
    setSearchBy(event.target.value);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Anta att onSearch gör något (som att logga eller förbereda data)
    //onSearch(searchTerm, searchBy); //DELA UPP TILL OLIKA METODER
    let url = `http://localhost:3000/product/search/by${encodeURIComponent(searchBy)}`;
    
    if (searchBy === "PriceRange") {
      // Antag att searchTerm är "100-500" för prissökning
      const [minPrice, maxPrice] = searchTerm.split('-');
      url += `?minPrice=${minPrice}&maxPrice=${maxPrice}`;
    } else {
      url += `?${searchBy.toLowerCase()}=${encodeURIComponent(searchTerm)}`;
    }

    // Använd `window.location.href` för att bygga URL med sökparametrar
    window.location.href = `http://localhost:3000/product/search/by${encodeURIComponent(searchBy)}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        //setProducts(data); // Spara datan i state
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        alert('Failed to retrieve data');
      });
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

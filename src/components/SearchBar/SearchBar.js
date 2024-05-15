import React, { useState } from 'react';

function SearchBar({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [type, setType] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [condition, setCondition] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'priceMin' || name === 'priceMax') {
      setPriceRange(prev => ({ ...prev, [name]: value }));
    } else {
      switch (name) {
        case 'searchTerm':
          setSearchTerm(value);
          break;
        case 'type':
          setType(value);
          break;
        case 'condition':
          setCondition(value);
          break;
        default:
          break;
      }
    }
  };

  const filteredData = data.filter(item =>
    (item.type.toLowerCase().includes(type.toLowerCase()) || type === '') &&
    (item.condition.toLowerCase().includes(condition.toLowerCase()) || condition === '') &&
    (item.price >= (priceRange.min || 0) && item.price <= (priceRange.max || Infinity)) &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        name="searchTerm"
        placeholder="Sök..."
        value={searchTerm}
        onChange={handleChange}
      />
      <select name="type" value={type} onChange={handleChange}>
        <option value="">Alla typer</option>
        <option value="elektronik">Elektronik</option>
        <option value="kläder">Kläder</option>
        <option value="böcker">Böcker</option>
      </select>
      <input
        type="text"
        name="priceMin"
        placeholder="Min pris"
        value={priceRange.min}
        onChange={handleChange}
      />
      <input
        type="text"
        name="priceMax"
        placeholder="Max pris"
        value={priceRange.max}
        onChange={handleChange}
      />
      <select name="condition" value={condition} onChange={handleChange}>
        <option value="">Alla skick</option>
        <option value="ny">Ny</option>
        <option value="begagnad">Begagnad</option>
        <option value="renoverad">Renoverad</option>
      </select>
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item.name} - {item.type} - {item.price} kr - {item.condition}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;

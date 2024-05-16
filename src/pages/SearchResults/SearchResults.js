import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductListing from '../../components/ProductListing/ProductListing.js';
import './SearchResults.css';
import { useCart } from '../../utilities/CartProvider';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery();
  const searchTerm = query.get('term');
  const searchBy = query.get('by');
  const { items } = useCart();

  const [products, setProducts] = useState([
    // Din produktdatabas här
  ]);

  const filteredProducts = products.filter(product => {
    // Använd searchTerm och searchBy för att skapa filtreringslogik
    return product[searchBy] && product[searchBy].toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className='search-results-page'>
      <div className='homepage-listing-wrapper'>
        {filteredProducts.map((product, index) => (
          <ProductListing key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;

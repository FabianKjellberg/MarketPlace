import { useEffect, useState } from 'react';
import ProductListing from '../../components/ProductListing/ProductListing.js';
import './HomePage.css';
import { useCart } from '../../utilities/CartProvider';
import CurrentListingManager from '../../utilities/CurrentListingManager.js';
import { useAuthentication } from '../../utilities/AuthenticationProvider';
import SubscribeCategory from '../../utilities/SubscribeCategory.js';
import { useSearch } from '../../components/SearchBar/SearchContext.js'

function HomePage() {
  const { items } = useCart();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [formData, setFormData] = useState({ category: '', product: '', minPrice: '', maxPrice: '' });
  const currentListingManager = new CurrentListingManager("http://localhost:8080");

  const { searchParams } = useSearch();
  //Arthur
  const subscribeToCategory = new SubscribeCategory("http://localhost:8080/");
  const { token } = useAuthentication();

  useEffect(() => {
    async function loadProducts() {
      const productsData = await currentListingManager.RetrieveListings();
      setProducts(productsData);
      //setFilteredProducts(productsData); // Initialisera filteredProducts med alla produkter
      filterProducts(productsData); 
    }

    loadProducts();
  }, [searchParams]);

  function filterProducts(productsData) {
    let filtered = productsData;

    if (!searchParams.term || searchParams.term.trim() === '') {
      setFilteredProducts(productsData);
      return;
    }

    if (searchParams.by === 'Name' && searchParams.term !== '') {
      filtered = filtered.filter(product => product.name.toLowerCase().includes(searchParams.term.toLowerCase()));
    }
    if (searchParams.by === 'Condition' && searchParams.term !== '') {
      filtered = filtered.filter(product => product.condition.toLowerCase().includes(searchParams.term.toLowerCase()));
    }
    if (searchParams.by === 'PriceRange' && searchParams.term !== '') {
      const [minPrice, maxPrice] = searchParams.term.split('-').map(Number);
      filtered = filtered.filter(product => product.price >= minPrice && product.price <= maxPrice);
    }

    setFilteredProducts(filtered);
  }
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let filtered = products;

    // Filtrera baserat på produktnamn
    if (name === 'product' && value !== '') {
      filtered = filtered.filter(product => product.name.toLowerCase().includes(value.toLowerCase()));
    }

    // Filtrera baserat på kategori
    if (name === 'category' && value !== '') {
      filtered = filtered.filter(product => product.category === value);
    }

    // Filtrera baserat på prisintervall
    const minPrice = formData.minPrice !== '' ? parseFloat(formData.minPrice) : 0;
    const maxPrice = formData.maxPrice !== '' ? parseFloat(formData.maxPrice) : Infinity;
    if (name === 'minPrice' || name === 'maxPrice') {
      filtered = filtered.filter(product => product.price >= minPrice && product.price <= maxPrice);
    }

    setFilteredProducts(filtered);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    subscribeToCategory.SubscribeToCategory({ category: formData.category }, token);
  };

  return (
    <>
      <div className='homepage'>
        <div className='homepage-listing-wrapper'>
          <div className='header-with-search'>
            <h1>Current Listings</h1>
            
            </div>
          </div>
          <div className='homepage-listings'>
            {filteredProducts.map((product) => {
              const isInCart = items.some(item => item.id === product.id);
              return !isInCart && <ProductListing key={product.id} product={product} inShoppingCart={false} isBuyable={true}/>;
            })}
          </div>
        </div>
        
      

        <form className='category-form' onSubmit={handleSubmit}>
          <div className='category-box'>
            <label>
              <p>Subscribe to Category</p>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="COMPUTER">Computer</option>
                <option value="MOBILE">Mobile</option>
                <option value="ELECTRONIC">Electronic</option>
                <option value="FURNITURE">Furniture</option>
                <option value="OTHER">Other</option>
              </select>
            </label>
            <div className='submit'>
              <button type='submit'>Subscribe</button>
            </div>
          </div>
        </form>
    </>
  );
}

export default HomePage;

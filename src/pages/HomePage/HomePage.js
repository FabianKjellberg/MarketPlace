import { useEffect, useState } from 'react';
import ProductListing from '../../components/ProductListing/ProductListing.js';
import './HomePage.css';
import { useCart } from '../../utilities/CartProvider';
import CurrentListingManager from '../../utilities/CurrentListingManager.js';
import { useAuthentication } from '../../utilities/AuthenticationProvider';
import SubscribeCategory from '../../utilities/SubscribeCategory.js';

function HomePage() {
  const { items } = useCart();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [formData, setFormData] = useState({ category: '', product: '', minPrice: '', maxPrice: '' });
  const currentListingManager = new CurrentListingManager("http://localhost:8080");

  //Arthur
  const subscribeToCategory = new SubscribeCategory("http://localhost:8080/");
  const { token } = useAuthentication();

  useEffect(() => {
    async function loadProducts() {
      const productsData = await currentListingManager.RetrieveListings();
      setProducts(productsData);
      setFilteredProducts(productsData); // Initialisera filteredProducts med alla produkter
    }

    loadProducts();
  }, []);

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
            <hr style={{ border: 'none', height: '1px', backgroundColor: '#333', marginBottom: '20px', marginRight: '25px' }} />
            <div className='search-by'>
              <div className='search-section'>
                <p>Search by:</p>
                <label>
                  Product
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    placeholder="Search products"
                    className="search-input"
                  />
                </label>
                <label>
                  Category
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="category-select"
                  >
                    <option value="">Select Category</option>
                    <option value="COMPUTER">Computer</option>
                    <option value="MOBILE">Mobile</option>
                    <option value="ELECTRONIC">Electronic</option>
                    <option value="FURNITURE">Furniture</option>
                    <option value="OTHER">Other</option>
                  </select>
                </label>
                <label>
                  Price Range
                  <div className="price-range">
                    <input
                      type="number"
                      name="minPrice"
                      value={formData.minPrice}
                      onChange={handleChange}
                      placeholder="Min Price"
                      className="price-input"
                    />
                    <input
                      type="number"
                      name="maxPrice"
                      value={formData.maxPrice}
                      onChange={handleChange}
                      placeholder="Max Price"
                      className="price-input"
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className='homepage-listings'>
            {filteredProducts.map((product) => {
              const isInCart = items.some(item => item.id === product.id);
              return !isInCart && <ProductListing key={product.id} product={product} inShoppingCart={false} isBuyable={true}/>;
            })}
          </div>
        </div>
        <button onClick={() => console.log(products)}>hej</button>
      </div>

      <form className='category-form' onSubmit={handleSubmit}>
        <label className='homepage'>
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
      </form>
    </>
  );
}

export default HomePage;

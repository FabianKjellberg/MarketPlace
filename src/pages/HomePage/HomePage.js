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
  const currentListingManager = new CurrentListingManager("http://localhost:8080");

  //Arthur
  const subscribeToCategory = new SubscribeCategory("http://localhost:8080/");
  const { token } = useAuthentication();

  const [formData, setFormData] = useState({
    category: ''
  });

  const handleChange = ((e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  });

  const handleSubmit = ((event) => {
    event.preventDefault();

    subscribeToCategory.SubscribeToCategory(formData, token);
  });
  //Arthur

  useEffect(() => {
    async function loadProducts() {
      const productsData = await currentListingManager.RetrieveListings();
      setProducts(productsData);
    }


    loadProducts();
  },[])

  return (
    <>
        <div className='homepage'>
          <div className='homepage-listing-wrapper'>
          <h1>Current Listings</h1>
            <div className='homepage-listings'>
                {products.map((product) => {
                const isInCart = items.some(item => item.id === product.id);
                return !isInCart && <ProductListing key={product.id} product={product} inShoppingCart={false} isBuyable={true}/>;
              })}
            </div>
          </div>
          <button onClick={()=>console.log(products)}>hej</button>
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
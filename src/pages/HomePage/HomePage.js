import { useEffect, useState } from 'react';
import ProductListing from '../../components/ProductListing/ProductListing.js';
import './HomePage.css';
import { useCart } from '../../utilities/CartProvider';
import CurrentListingManager from '../../utilities/CurrentListingManager.js';

function HomePage() {

  const { items } = useCart();
  const [products, setProducts] = useState([]);
  const currentListingManager = new CurrentListingManager("http://localhost:8080");

  useEffect(() => {
    async function loadProducts() {
      const productsData = await currentListingManager.RetrieveListings();
      setProducts(productsData);
      console.log(products)
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
        </div>
    </>
  );
}

export default HomePage;
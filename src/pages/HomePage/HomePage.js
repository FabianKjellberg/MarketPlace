import { useState } from 'react';
import ProductListing from '../../components/ProductListing/ProductListing.js';
import './HomePage.css';
import { useCart } from '../../utilities/CartProvider';

function HomePage() {

  const { items } = useCart();

  const [products, setProducts] = useState([
    { id: 1, name: 'Mac book air pro1', price: 99.99, yearOfProduction: '2022', color: 'RED', condition: 'new' },
    { id: 2, name: 'Mac book air pro2', price: 99.99, yearOfProduction: '2022', color: 'RED', condition: 'new' },
    { id: 3, name: 'Mac book air pro3', price: 99.99, yearOfProduction: '2022', color: 'RED', condition: 'new' },
    { id: 4, name: 'Mac book air pro4', price: 99.99, yearOfProduction: '2022', color: 'RED', condition: 'new' },
    { id: 5, name: 'Mac book air pro5', price: 99.99, yearOfProduction: '2022', color: 'RED', condition: 'new' },
    { id: 6, name: 'Mac book air pro7', price: 99.99, yearOfProduction: '2022', color: 'RED', condition: 'new' }
  ]);

  return (
    <>
        <div className='homepage'>
          <div className='homepage-listing-wrapper'>
            <div className='homepage-listings'>
              {products.map((product, index) => {
                const isInCart = items.some(item => item.id === product.id);
                return !isInCart && <ProductListing key={index} product={product} inShoppingCart={false}/>;
              })}
            </div>
          </div>
        </div>
    </>
  );
}

export default HomePage;
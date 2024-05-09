import ProductListing from '../../components/ProductListing/ProductListing.js';
import './ShoppingCart.css';
import { useCart } from '../../utilities/CartProvider';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ShoppingCart() {

  const { items, itemCount } = useCart();
  let navigate = useNavigate();

  return (
    <>
        <div className='shopping-cart'>
            {(itemCount === 0) && (
            <>
                <div className='empty-cart'>
                    <h1>Your cart is empty.</h1>
                    <button onClick={() => navigate('/')}>Go to current listings</button>
                </div> 
            </>
        )}
            <div className='homepage-listing-wrapper'>
                <div className='homepage-listings'>
                    {items.map((item, index) => (
                    <ProductListing key={item.id || index} product={item} inShoppingCart={true}/>
                ))}
                </div>
            </div>
        </div>
    </>
  );
}

export default ShoppingCart;
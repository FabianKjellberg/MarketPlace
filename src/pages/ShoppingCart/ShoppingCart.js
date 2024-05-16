import ProductListing from '../../components/ProductListing/ProductListing.js';
import './ShoppingCart.css';
import { useCart } from '../../utilities/CartProvider';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../../utilities/AuthenticationProvider.js';
import CreateOfferManager from '../../utilities/CreateOfferManager.js';

function ShoppingCart() {

  const { items, itemCount, totalCost } = useCart();
  let navigate = useNavigate();

  const createOfferManager = new CreateOfferManager();

  const { loggedIn } = useAuthentication();

  function submitOffer(){
        if(!loggedIn) navigate('/login?redirect=shoppingcart')
        else{
            
        }
  }

  return (
    <>
        {/*-- HEADER --*/}
        <div className='shopping-cart-header'>
            <h1>SHOPPING CART</h1>
        </div>
        {/*-- MAIN --*/}
        <div className='shopping-cart'>
            {/*-- when the shopping cart is empty --*/}
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
                    {items.map((item) => (
                    <ProductListing key={item.id} product={item} inShoppingCart={true} isBuyable={true}/>
                ))}
                </div>
            </div>
            {(itemCount > 0) && (
            <>
                <div className='shopping-cart-make-offer'>
                    <button onClick={() => submitOffer()}>Make Offer <b>(Total price: {totalCost.toFixed(2)})</b></button>
                </div>
            </>
            )}
        </div>
    </>
  );
}

export default ShoppingCart;
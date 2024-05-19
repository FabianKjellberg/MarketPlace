import { useState, useEffect } from 'react';
import ProductOffer from '../../components/ProductOffer/ProductOffer.js'
import { useAuthentication } from '../../utilities/AuthenticationProvider.js';
import OfferManager from '../../utilities/OfferManager.js'

function Offers() {


  const [productOffers, setProductOffers] = useState([]);
  const { token } = useAuthentication();
  const offerManager = new OfferManager("http://localhost:8080");

  const fetchOffers = async () => {
    try {
      const products = await offerManager.getOffers(token);
      setProductOffers(products);
    } catch (error) {
      console.error('Error retrieving offers', error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOffers();
    }
  }, [token]);

  return (
    <>
      <div className='profile-user-listings'>
        <h1>My Offers</h1>
        <p>Here you can Accept or Reject offers people have made on your items. If this page is empty it means your items are still available to buy on current listings.</p>
        <hr style={{ border: 'none', height: '1px', backgroundColor: '#333', marginBottom: '20px', marginRight: '25px' }} />
        <div className='profile-my-offers'>
          {productOffers.map((product) => (
            <ProductOffer
              product={product}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Offers;
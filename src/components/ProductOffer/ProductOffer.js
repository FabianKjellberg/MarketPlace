import ProductListing from '../ProductListing/ProductListing';
import './ProductOffer.css'
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthentication } from '../../utilities/AuthenticationProvider';
import OfferManager from '../../utilities/OfferManager';

function ProductOffer(props) {

    const [product, setProduct] = useState(props.product)

    const offerManager = new OfferManager("http://localhost:8080");

    const { token } = useAuthentication();

    useEffect(() => {
        setProduct(props.product)
    }, [props.product]);

    function acceptOffer(){
        offerManager.acceptOffer(product.id, token).then((response)=>{
            if(response !== "error"){
                props.removeSelf(product.id)
            }   
        })
    }

    function rejectOffer(){
        offerManager.rejectOffer(product.id, token).then((response)=>{
            if(response !== "error"){
                props.removeSelf(product.id)
            }   
        })
    }
    
    return (
    <>
        <div className='product-offer-wrapper'>
            
            <ProductListing 
                product={product}
            />
            <div className='product-offer-buttons'>
                <p>{product.buyerUsername ? product.buyerUsername : "DEFAULT" } wants to purchase your item</p>
                <div className='product-offer-buttons-wrapper'>
                    <button onClick={() => acceptOffer()}>Accept</button>
                    <button onClick={() => rejectOffer()}>Reject</button>
                </div> 
            </div>
        </div> 
    </>
  );
}

export default ProductOffer;
import ProductListing from '../ProductListing/ProductListing';
import './ProductOffer.css'
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthentication } from '../../utilities/AuthenticationProvider.js';
import axios from "axios";
import AcceptProductManager from '../../utilities/AcceptProductManager.js';
import RejectProductManager from '../../utilities/RejectProductManager.js';

function ProductOffer(props) {

    const [product, setProduct] = useState(props.product)
    const [isOfferHandled, setIsOfferHandled] = useState(false); // Add this line
    const { token } = useAuthentication();

    const acceptProductManager = new AcceptProductManager("http://localhost:8080");
    const rejectProductManager = new RejectProductManager("http://localhost:8080");


    useEffect(() => {
        setProduct(props.product)
    }, [props.product]);

    const handleAccept = (productId) => {
        acceptProductManager.AcceptOffer(productId, token)
        setProduct({...product, buyerUsername: ""})
        setIsOfferHandled(true); // Add this line
    }

    const handleReject = (productId) => {
        rejectProductManager.RejectOffer(productId, token)
        setProduct({...product, buyerUsername: ""})
        setIsOfferHandled(true); // Add this line
    }

    if (isOfferHandled) {
        return null;
    }
    
    return (
    <>
        <div className='product-offer-wrapper'>
            
            <ProductListing 
                product={product}
                isRemovable={true}
            />
            <div className='product-offer-buttons'>
                <p>{product.buyerUsername ? product.buyerUsername : "DEFAULT" } wants to purchase your item</p>
                <div className='product-offer-buttons-wrapper'>
                    <button onClick={handleAccept}>Accept</button>
                    <button onClick={handleReject}>Reject</button>
                </div> 
            </div>
        </div> 
    </>
  );
}

export default ProductOffer;
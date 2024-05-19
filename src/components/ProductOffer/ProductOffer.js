import ProductListing from '../ProductListing/ProductListing';
import './ProductOffer.css'
import React, { useEffect } from 'react';
import { useState } from 'react';

function ProductOffer(props) {

    const [product, setProduct] = useState(props.product)

    useEffect(() => {
        setProduct(props.product)
    }, [props.product]);
    
    return (
    <>
        <div className='product-offer-wrapper'>
            
            <ProductListing 
                product={product}
            />
            <div className='product-offer-buttons'>
                <p>{product.buyerUsername ? product.buyer.username : "DEFAULT" } wants to purchase your item</p>
                <div className='product-offer-buttons-wrapper'>
                    <button>Accept</button>
                    <button>Reject</button>
                </div> 
            </div>
        </div> 
    </>
  );
}

export default ProductOffer;
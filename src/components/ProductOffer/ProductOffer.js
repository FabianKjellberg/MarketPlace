import ProductListing from '../ProductListing/ProductListing';
import './ProductOffer.css'
import React from 'react';
import { useState } from 'react';
import CollapsableMenu from '../CollapsableMenu/CollapsableMenu';
import { useCart } from '../../utilities/CartProvider';

function ProductOffer(props) {

    return (
    <>
        <div className='product-offer-wrapper'>
            <ProductListing 
                product={props.product}
            />
            <div className='product-offer-buttons'>
                <p>hej</p>
                <button>Accept</button>
                <button>Reject</button>
            </div>
        </div> 
    </>
  );
}

export default ProductOffer;
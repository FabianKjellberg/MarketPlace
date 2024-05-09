import './ProductListing.css'
import React from 'react';
import { useState } from 'react';
import CollapsableMenu from '../CollapsableMenu/CollapsableMenu';
import { useCart } from '../../utilities/CartProvider';

function ProductListing(props) {
    const [product, setProduct] = useState(props.product)
    const [inShoppingCart, setInshoppingCart] = useState(props.inShoppingCart);

    const { addItem, removeItem} = useCart();

    function buttonClick(){
        
        if(inShoppingCart) removeItem(product.id) 
        else addItem(product);

        console.log("hej" + inShoppingCart);
        
    }

    return (
    <>
        <div className='product-listing-frame'>
            <div>
                <h1><b>{product.name}</b></h1>
                <CollapsableMenu 
                    title={"Description"}
                    className="product-listing-description"
                    >
                    <p>Production Year: {product.yearOfProduction}</p>
                    <p>Color: {product.color}</p>
                    <p>Condition Year: {product.condition}</p>
                </CollapsableMenu>
            </div>
            <div className='product-listing-price-button'>
                <p><b>Price: </b>{product.price} $</p>
                <button onClick={() => buttonClick()}>{inShoppingCart ? 'Remove from cart' : 'Add to cart'}</button>
            </div>
        </div> 
    </>
  );
}

export default ProductListing;
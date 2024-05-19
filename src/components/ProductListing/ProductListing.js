import './ProductListing.css'
import React from 'react';
import { useState } from 'react';
import CollapsableMenu from '../CollapsableMenu/CollapsableMenu';
import { useCart } from '../../utilities/CartProvider';

function ProductListing(props) {
    const [product, setProduct] = useState(props.product || { id: 1436346236462462346346, name: 'DEFAULT', price: 99.99, yearOfProduction: 'DEFAULT', color: 'DEFAULT', condition: 'DEFAULT', seller:{username:'DEFAULT'} , buyer:{username:'DEFAULT'} })
    const [inShoppingCart, setInshoppingCart] = useState(props.inShoppingCart || false);
    const [isBuyable, setIsBuyable] = useState(props.isBuyable || false);
    const [isRemovable, setIsRemovable] = useState(props.isRemovable || false);

    const { addItem, removeItem } = useCart();

    function buttonClick(){    
        if(inShoppingCart) removeItem(product.id) 
        else addItem(product);
    }

    return (
    <>
        <div className='product-listing-frame'>
            <div>
                <div className='product-listing-title'>
                    <h1><b>{product.name}</b></h1>
                    {isRemovable && <button onClick={() => props.removeSelf(product.id)}> x </button>}
                </div>
                <CollapsableMenu 
                    title={"Description"}
                    className="product-listing-description"
                    >
                    <p>Production Year: {product.yearOfProduction}</p>
                    <p>Color: {product.color}</p>
                    <p>Condition: {product.condition}</p>
                    <p>Category: {product.category}</p>
                    <p>Seller: <b>{product?.sellerUsername ? product.sellerUsername : "DEFAULT"}</b></p>
                </CollapsableMenu>
            </div>
            <div className='product-listing-price-button'>
                <p><b>Price: </b>{product.price} $</p>
                {isBuyable && <button onClick={() => buttonClick()}>{inShoppingCart ? 'Remove from cart' : 'Add to cart'}</button>}
            </div>
        </div> 
    </>
  );
}

export default ProductListing;
import './Header.css'
import React from 'react';
import { Link } from 'react-router-dom';
import RoundButton from "../RoundButton/RoundButton.js";
import Burger from '../Burger/Burger.js'
import logo from '../../resources/images/marketplace_logo.png'
import { useCart } from '../../utilities/CartProvider';

function Header() {
  
    const { itemCount } = useCart();
  
    return (
    <>
        
        
        <div className="header-burger">
        <Link to="/"><img className="logo-name" src={logo}></img></Link>
            <Burger >
                
                <div className='header'>
                    <div className="header-top">
                        <Link to="signup"><a>Sign Up</a></Link>
                        <Link to="login"><a>Login</a></Link>
                        <Link href="google.com">Profile</Link>
                    </div>
                    <div className='header-line'/>
                    <div className="header-bottom">
                        <Link to="shoppingcart">Shopping Cart ({itemCount})</Link>
                        <RoundButton 
                            text={"Sell Now"}
                        />
                    </div>
                </div>
            </Burger>
        </div>
    </>
  );
}

export default Header;
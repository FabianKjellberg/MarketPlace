import './Header.css'
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import RoundButton from "../RoundButton/RoundButton.js";
import Burger from '../Burger/Burger.js'
import logo from '../../resources/images/marketplace_logo.png'
import SearchBar from '../SearchBar/SearchBar.js';
import { useCart } from '../../utilities/CartProvider';
import { useNavigate } from 'react-router-dom';

function Header() {
  
    const { itemCount } = useCart();

    const navigate = useNavigate(); 

    const handleSearch = (searchTerm, searchBy) => {
        navigate(`/search?term=${encodeURIComponent(searchTerm)}&by=${encodeURIComponent(searchBy)}`);
    };
  
    return (
    <>
        
        
        <div className="header-burger">
        <Link to="/"><img className="logo-name" src={logo}></img></Link>
        <SearchBar onSearch={handleSearch}/> 
            <Burger >
                <div className='header'>
                    <div className="header-top">
                        <Link to="signup"><a>Sign Up</a></Link>
                        <Link to="login"><a>Login</a></Link>
                        <Link href="google.com">Profile</Link>
                    </div>
                    <div className='header-line'/>
                    <div className="header-bottom">
                        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""} >Current Listings </NavLink>
                        <NavLink to="shoppingcart" className={({ isActive }) => isActive ? "active-link" : ""} >Shopping Cart ({itemCount})</NavLink>
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
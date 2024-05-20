import './Header.css';
import { React, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import RoundButton from "../RoundButton/RoundButton.js";
import Burger from '../Burger/Burger.js';
import logo from '../../resources/images/marketplace_logo.png';
import { useCart } from '../../utilities/CartProvider';
import { useAuthentication } from '../../utilities/AuthenticationProvider';
import SearchBar from '../SearchBar/SearchBar.js';
import { useSearch } from '../SearchBar/SearchContext.js';

function Header() {
    const { itemCount } = useCart();
    const { loggedIn, logIn, logOut } = useAuthentication();
    const [nav, setNav] = useState('sellproduct');
    const { setSearchParams } = useSearch();
    const location = useLocation();

    const handleSearch = (searchTerm, searchBy) => {
        setSearchParams({ term: searchTerm, by: searchBy });
    };

    const showSearchBar = !['/login', '/signup'].includes(location.pathname);

    return (
    <>
        <div className="header-burger">
            <Link to="/"><img className="logo-name" src={logo} alt="Marketplace Logo" /></Link>
            {showSearchBar && <SearchBar onSearch={handleSearch} />}
            <Burger>
                <div className='header'>
                    <div className="header-top">
                        {!loggedIn ? (
                            <>
                                <Link to="signup">Sign Up</Link>
                                <Link to="login">Login</Link>
                            </>
                        ) : (
                            <>
                                <Link onClick={logOut} to='/'>Log out</Link>
                                <Link to="profile/userinfo">Profile</Link>
                            </>
                        )}
                    </div>
                    <div className='header-line'/>
                    <div className="header-bottom">
                        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Current Listings</NavLink>
                        <NavLink to="shoppingcart" className={({ isActive }) => isActive ? "active-link" : ""}>Shopping Cart ({itemCount})</NavLink>
                        <RoundButton text={"Sell Now"} nav={nav} />
                    </div>
                </div>
            </Burger>
        </div>
    </>
  );
}

export default Header;

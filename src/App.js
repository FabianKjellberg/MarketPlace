/*-- dependencies --*/
import './App.css';
import { React , useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
/*-- components --*/
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
/*-- pages --*/
import Home from './pages/HomePage/HomePage.js'
import SignUp from './pages/SignUp/SignUp.js'
import LogIn from './pages/LogIn/LogIn.js'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart.js'
import SellProduct from './pages/SellProduct/SellProduct.js'
import Profile from './pages/Profile/Profile.js'
import UserInfo from './pages/UserInfo/UserInfo';
import UserListings from './pages/UserListings/UserListings';
import Offers from './pages/Offers/Offers';
import Inbox from './pages/Inbox/Inbox';
import History from './pages/History/History';

import { CartProvider } from './utilities/CartProvider';
import { AuthenticationProvider } from './utilities/AuthenticationProvider';

function App() {
  

  return (
    <div className='app-site'>
      <CartProvider>
      <AuthenticationProvider>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/shoppingcart" element={<ShoppingCart />} />
                <Route path="/sellproduct" element={<SellProduct />} />
                <Route path="/profile/*" element={<Profile />}>
                  <Route path="userinfo" element={<UserInfo />}/>
                  <Route path="listings" element={<UserListings />} />
                  <Route path="offers" element={<Offers />}/>
                  <Route path="inbox" element={<Inbox />}/>
                  <Route path="history" element={<History />}/>
                </Route>
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
        </AuthenticationProvider>
      </CartProvider>
      
    </div>
  );
}

export default App;
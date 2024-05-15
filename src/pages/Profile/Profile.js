import { useEffect, useState } from 'react';
import ProductListing from '../../components/ProductListing/ProductListing.js';
import './Profile.css';
import ProfileSidebar from '../../components/ProfileSideBar/ProfileSideBar.js';
import { useAuthentication } from '../../utilities/AuthenticationProvider.js';
import { useNavigate } from 'react-router-dom';

function Profile() {

  const { loggedIn } = useAuthentication();
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!loggedIn) navigate('/login?redirect=profile/userinfo')
  }, [loggedIn])

  return (
    <>
        <ProfileSidebar />
    </>
  );
}

export default Profile;
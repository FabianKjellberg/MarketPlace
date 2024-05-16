import React, { createContext, useContext, useState } from 'react';

const AuthenticationContext = createContext();

export const useAuthentication = () => useContext(AuthenticationContext);

export const AuthenticationProvider = ({ children }) => {
    
  const[userName, setUserName] = useState("NULLLLLL")

  const [loggedIn, setLoggedIn] = useState(false);

  const [token, setToken] = useState(null);

    const logIn = (userName) => {
      setLoggedIn(true);
      setUserName(userName);
    }
    const logOut = () => {
      setLoggedIn(false);
      setUserName("NULLLLLL")
      setToken(null);
    }

  const value = {
    setToken,
    token,
    loggedIn,
    logIn,
    logOut,
    userName,
  };

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};
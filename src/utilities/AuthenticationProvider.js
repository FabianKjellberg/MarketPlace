import React, { createContext, useContext, useState } from 'react';

const AuthenticationContext = createContext();

export const useAuthentication = () => useContext(AuthenticationContext);

export const AuthenticationProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);

    const logIn = () => setLoggedIn(true);
    const logOut = () => setLoggedIn(false);

  const value = {
    loggedIn,
    logIn,
    logOut,
  };

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};
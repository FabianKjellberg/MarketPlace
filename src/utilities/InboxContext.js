import React, { createContext, useContext, useState } from 'react';

const InboxContext = createContext();

export const useInbox = () => useContext(InboxContext);

export const InboxProvider = ({ children }) => {
  const [inboxCount, setInboxCount] = useState(0);

  return (
    <InboxContext.Provider value={{ inboxCount, setInboxCount }}>
      {children}
    </InboxContext.Provider>
  );
};

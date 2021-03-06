import React, { createContext, useContext, useState } from 'react';

const useAuthState = () => useState<{ token: string } | null>(null);

const AuthContext = createContext<ReturnType<typeof useAuthState>>([
  null,
  () => { throw new Error('uninitialized'); },
]);

export const AuthContextProvider: React.FC = ({ children }) => (
  <AuthContext.Provider value={useAuthState()}>
    {children}
  </AuthContext.Provider>
);

export const useAuthContext = () => useContext(AuthContext);

import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const getToken = (token) => {
    setToken(token);
  };

  const destroyToken = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, getToken, destroyToken }}>
      {children}
    </AuthContext.Provider>
  );
};

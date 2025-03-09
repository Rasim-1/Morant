import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  return (
    <AppContext.Provider value={{ navigate }}>{children}</AppContext.Provider>
  );
};

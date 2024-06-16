import React, { createContext, useContext, useState, ReactNode } from 'react';


interface AppContextType {
  userLogin: boolean;
  setUserLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider: React.FC<{ children: ReactNode }> =({children})=> {
  const [userLogin, setUserLogin] = useState<boolean>(false);
  return (
    <AppContext.Provider value={{ userLogin, setUserLogin }}>
      {children}
  </AppContext.Provider>
  )
}
const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
export { AppProvider ,useAppContext};
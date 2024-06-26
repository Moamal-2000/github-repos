import { createContext, useContext } from "react";

export const GlobalContext = createContext();
export const useGlobalContext = useContext(GlobalContext);

const GlobalContextProvider = ({ children }) => {
  const data = {};
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};
export default GlobalContextProvider;

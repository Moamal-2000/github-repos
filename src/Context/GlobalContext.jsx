import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = ({ children }) => {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [previewImg, setPreviewImg] = useState("");

  const data = {
    isOverlayActive,
    setIsOverlayActive,
    previewImg,
    setPreviewImg,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};
export default GlobalContextProvider;

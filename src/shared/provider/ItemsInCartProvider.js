import { createContext, useState } from "react";

export const ItemsInCartContext = createContext(null);

export const ItemsInCartProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);
  return (
    <ItemsInCartContext.Provider value={[itemsInCart, setItemsInCart]}>
      {children}
    </ItemsInCartContext.Provider>
  );
};

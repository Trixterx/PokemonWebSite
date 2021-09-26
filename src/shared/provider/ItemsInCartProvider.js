import { createContext, useState } from "react";

export const ItemsInCartContext = createContext(null);

export const ItemsInCartProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState(["Test item, remove later"]);
  return (
    <ItemsInCartContext.Provider value={[itemsInCart, setItemsInCart]}>
      {children}
    </ItemsInCartContext.Provider>
  );
};

import { createContext, useEffect, useState } from "react";
import { getProductsAndDocuments } from "../utils/firebase";

export const ProductContext = createContext({
  products: {},
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState({});
  const value = { products };

  useEffect(() => {
    const getProductsMap = async () => {
      const productMap = await getProductsAndDocuments();
      setProducts(productMap);
    };

    getProductsMap();
  }, []);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

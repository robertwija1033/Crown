import { createContext, useEffect, useReducer } from "react";
import { getProductsAndDocuments } from "../../utils/firebase";
import productReducer from "../reducers/productReducer";
import ProductType from "../types/productType";

export const ProductContext = createContext({
  products: {},
});

const INITIAL_STATE = {
  products: {},
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, INITIAL_STATE);
  const { products } = state;

  const setProducts = (product) => {
    dispatch({ type: ProductType.SET_PRODUCTS, payload: product });
  };

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

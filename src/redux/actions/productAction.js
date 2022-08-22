import ProductType from "../types/productType";

export const fetchProductStart = () => ({
  type: ProductType.FETCH_PRODUCT_START,
  payload: null,
});

export const fetchProductSuccess = (products) => ({
  type: ProductType.FETCH_PRODUCT_SUCCESS,
  payload: products,
});

export const fetchProductFailed = (error) => ({
  type: ProductType.FETCH_PRODUCT_FAILED,
  payload: error,
});

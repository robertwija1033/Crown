import { createSelector } from "reselect";

const selectProductReducer = (state) => state.product;

const selectProductMemoization = createSelector(
  [selectProductReducer],
  (product) => product.products
);

// selectProductMemoization
// for speed using this

export const productMemoization = createSelector(
  [selectProductMemoization],
  (product) =>
    product.reduce((acc, products) => {
      const { title, items } = products;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const isLoadingMemoization = createSelector(
  [selectProductReducer],
  (product) => product.isLoading
);

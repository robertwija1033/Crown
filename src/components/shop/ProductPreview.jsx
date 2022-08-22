import { useSelector } from "react-redux";
import {
  isLoadingMemoization,
  productMemoization,
} from "../../redux/memoization/productMemoization";
import Spinner from "../spinner/Spinner";
import ProductCardPreview from "./ProductCardPreview";

const ProductPreview = () => {
  // const products = useSelector((state) => state.product.products);

  // const products = useSelector(
  //   createSelector([productMemoization], (products) => products)
  // );

  const products = useSelector(productMemoization); // for speed using this
  const isLoading = useSelector(isLoadingMemoization);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(products).map((title) => {
          const productss = products[title];
          return (
            <ProductCardPreview
              key={title}
              title={title}
              products={productss}
            />
          );
        })
      )}
    </>
  );
};

export default ProductPreview;

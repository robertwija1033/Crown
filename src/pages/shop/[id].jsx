import {
  ContainerProductDetail,
  ProductDetailTitle,
} from "../../styles/shop/[id].js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  isLoadingMemoization,
  productMemoization,
} from "../../redux/memoization/productMemoization.js";
import ProductCard from "../../components/shop/ProductCard";
import Spinner from "../../components/spinner/Spinner.jsx";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  // const products = useSelector((state) => state.product.products);

  // const products = useSelector(
  //   createSelector([productMemoization], (products) => products)
  // );

  const products = useSelector(productMemoization); // for speed using this
  const isLoading = useSelector(isLoadingMemoization);

  useEffect(() => {
    setProduct(products[id]);
  }, [products, id]);

  return (
    <>
      <ProductDetailTitle>{id.toUpperCase()}</ProductDetailTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <ContainerProductDetail>
          {product &&
            product.map((products) => (
              <ProductCard key={products.id} product={products} />
            ))}
        </ContainerProductDetail>
      )}
    </>
  );
};

export default ProductDetail;

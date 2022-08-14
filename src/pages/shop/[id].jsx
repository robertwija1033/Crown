import {
  ContainerProductDetail,
  ProductDetailTitle,
} from "../../styles/shop/[id].js";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/productContext";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/shop/ProductCard";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  useEffect(() => {
    setProduct(products[id]);
  }, [products, id]);

  return (
    <>
      <ProductDetailTitle>{id.toUpperCase()}</ProductDetailTitle>
      <ContainerProductDetail>
        {product &&
          product.map((products) => (
            <ProductCard key={products.id} product={products} />
          ))}
      </ContainerProductDetail>
    </>
  );
};

export default ProductDetail;

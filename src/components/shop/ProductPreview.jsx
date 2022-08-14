import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import ProductCardPreview from "./ProductCardPreview";

const ProductPreview = () => {
  const { products } = useContext(ProductContext);

  return (
    <>
      {Object.keys(products).map((title) => {
        const productss = products[title];
        return (
          <ProductCardPreview key={title} title={title} products={productss} />
        );
      })}
    </>
  );
};

export default ProductPreview;

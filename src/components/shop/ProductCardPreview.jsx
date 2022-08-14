import {
  ContainerProductCardPreview,
  Preview,
  Title,
} from "../../styles/shop/ProductCardPreview.js";

import ProductCard from "./ProductCard";

const ProductCardPreview = ({ title, products }) => {
  return (
    <ContainerProductCardPreview>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </ContainerProductCardPreview>
  );
};

export default ProductCardPreview;

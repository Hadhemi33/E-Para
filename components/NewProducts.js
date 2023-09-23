import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  padding-top: 30px;
`;
export default function NewProducts({ product }) {
  return (
    <Center>
      <ProductsGrid>
        {product?.length > 0 &&
          product.map((product) => <ProductBox {...product} />)}
      </ProductsGrid>
    </Center>
  );
}

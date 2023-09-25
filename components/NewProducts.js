import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  // padding-top: 30px;
`;
const Title = styled.h2`
 font-size:2rem
  margin: 30px 0 20px;
  font-weight: 500;
  // color: #36591d
 
`;
export default function NewProducts({ product }) {
  return (
    <Center>
      <Title> &#10022; New Arrivals &#10022;</Title>
      <ProductsGrid>
        {product?.length > 0 &&
          product.map((product) => <ProductBox {...product} />)}
      </ProductsGrid>
    </Center>
  );
}

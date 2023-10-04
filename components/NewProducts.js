import styled from "styled-components";
import Center from "./Center";
import ProductsGrid from "./ProductsGrid";

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
      <ProductsGrid products={product} />
    </Center>
  );
}

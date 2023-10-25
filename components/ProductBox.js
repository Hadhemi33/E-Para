import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/Cart";
import Link from "next/link";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const WhiteBox = styled(Link)`
  background-color: white;
  padding: 20px;
  height: 200px;

  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 10px;
  img {
    margin: 0;
    max-width: 100%;
    max-height: 100%;
  }
`;
const Title = styled(Link)`
  font-weight: bold;
  font-size: 1rem;
  color: inherit;
  text-decoration: none;
  margin: 5px;
`;
const PriceRow = styled.div`
  align-items: center;
  // display: flex;
  display: block;
  justify-content: space-between;
  margin-top: 2px;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
`;
const ProductWrapper = styled.div`
  border: 1px solid #619a35;
  border-radius: 10px;
  margin-bottom: 40px;
`;
const ProductInfoBox = styled.div`
  padding: 10px;
`;
const Price = styled.div`
  font-size: 1rem;
  font-weight: 400;

  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
  }
`;
export default function ProductBox({ _id, title, description, price, images }) {
  const url = "/product/" + _id;
  const { addProduct } = useContext(CartContext);
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <img src={images?.[0]} alt="" />
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price> ${price}</Price>

          <Button primary outline onClick={() => addProduct(_id)}>
            <CartIcon />
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}

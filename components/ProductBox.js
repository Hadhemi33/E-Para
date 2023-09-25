import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/Cart";
import Link from "next/link";

const WhiteBox = styled.div`
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
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
`;
const ProductWrapper = styled.div`
  border: 4px solid #eefffb;
  border-radius: 10px;
`;
const ProductInfoBox = styled.div`
  padding: 20px;
`;
const Price = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  ////
  text-align: right;
`;
export default function ProductBox({ _id, title, description, price, images }) {
  return (
    <ProductWrapper>
      <WhiteBox>
        <img src={images?.[0]} alt="" />
      </WhiteBox>
      <ProductInfoBox>
        <Title href={""}>{title}</Title>
        <PriceRow>
          <Price> ${price}</Price>

          <Button primary>
            <CartIcon />
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}

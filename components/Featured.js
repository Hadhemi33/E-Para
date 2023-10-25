import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import Image from "next/image";
import ButtonLink from "./ButtonLink";

import Ft1 from "../../images/almaflore.jpg";
import CartIcon from "./icons/Cart";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  color: #000;
  // padding: 0px 0px 0px 0px;

  // @media screen and (min-width: 768px) {
  //   min-width: 100%;
  // }
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  margin-bottom: 20px;
  margin-top: 10px;

  font-size: 2rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
    margin-top: 40px;
    margin-bottom: 40px;

    font-size: 3rem;
  }
`;
const Desc = styled.p`
  color: #000;
  font-size: 1.2rem;
  // margin-top: 30px;
  margin-bottom: 40px;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  order: -1;
  gap: 40px;
  justify-content: center;
  align-items: center;
  // align-items: center;
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
`;
const Images = styled(Image)`
  max-width: 80%;
  max-height: 300px;

  display: block;
  margin: 20px auto;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 90%;
    max-width: 90%;
    height: 450px;
    max-height: 500px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
`;
export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);

  function addFeaturedToCart() {
    addProduct(product._id);
  }
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>
              <ButtonWrapper>
                <ButtonLink
                  href={"/product/" + product._id}
                  outline={1}
                  white={1}
                  size="l"
                >
                  Read More
                </ButtonLink>
                <Button primary={1} size="l" onClick={addFeaturedToCart}>
                  <CartIcon />
                  Add to cart
                </Button>
              </ButtonWrapper>
            </div>
          </Column>
          <Images src={Ft1} alt="ft1" />
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}

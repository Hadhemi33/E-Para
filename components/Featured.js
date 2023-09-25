import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import Image from "next/image";
import ButtonLink from "./ButtonLink";

import Ft1 from "../Assets/pack.jpg";
import CartIcon from "./icons/Cart";

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
  margin-bottom: 40px;
  margin-top: 40px;

  font-size: 3rem;
  // @media screen and (min-width: 768px) {
  //   font-size: 3rem;
  // }
`;
const Desc = styled.p`
  color: #000;
  font-size: 1.2rem;
  // margin-top: 30px;
  margin-bottom: 40px;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  justify-content: center;
  align-items: center;
  // align-items: center;
`;
const Column = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
`;
const Images = styled(Image)`
  max-width: 100%;
  height: 80%;

  margin-left: auto;
  margin-right: auto;
  ///////////////////
  width: 70%;

  // @media screen and (max-width: 768px) {
  //   height: 70%;
  //   width: 70%;
  // }
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
`;
export default function Featured({ product }) {
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
                  href={"/products/" + product._id}
                  outline={1}
                  white={1}
                  size="l"
                >
                  Read More
                </ButtonLink>
                <Button primary={1} size="l">
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

import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import Image from "next/image";
import ButtonLink from "./ButtonLink";

import Ft1 from "../../images/almaflore.jpg";
import Ft2 from "../Assets/feataure.png";
import CartIcon from "./icons/Cart";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;

  // padding: 0px 0px 0px 0px;

  // @media screen and (min-width: 768px) {
  //   min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  // }
`;
const Title = styled.h1`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: normal;
  margin-bottom: 20px;
  margin-top: 10px;

  font-size: 2rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
    margin-top: 40px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 3rem;
  }
`;
const Desc = styled.p`
  color: #000;
  font-size: 1.2rem;
  // margin-top: 30px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
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
    display: flex;
    align-items: center;
    justify-content: center;

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

  gap: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
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
              {/* <Title>{product.title}</Title> */}
              <Title> 𝙎𝙖𝙣𝙩é 𝙚𝙩 𝘽𝙞𝙚𝙣-ê𝙩𝙧𝙚 à 𝙥𝙤𝙧𝙩é𝙚 𝙙𝙚 𝙘𝙡𝙞𝙘! </Title>
              {/* <Desc>{product.description}</Desc> */}
              <Desc>
                ParaTun vous propose une large gamme de produits en petits prix.
                Ne ratez pas nos réductions et promotions importantes sur les
                plus grandes marques.
              </Desc>
              <ButtonWrapper>
                <ButtonLink href={"/products"} primary={1} size="l">
                  Voir plus &#10095;
                </ButtonLink>
              </ButtonWrapper>
            </div>
          </Column>
          <Images src={Ft2} alt="ft1" />
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}

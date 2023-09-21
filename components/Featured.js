import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import Image from "next/image";
import ButtonLink from "./ButtonLink";

import Ft1 from "../Assets/pack.jpg";

const Bg = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  color: #000;
  padding: 50px 0;
  // @media screen and (min-width: 768px) {
  //   min-width: 100%;
  // }
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  margin-bottom: 50px;

  font-size: 3rem;
  // @media screen and (min-width: 768px) {
  //   font-size: 3rem;
  // }
`;
const Desc = styled.p`
  color: #000;
  font-size: 1.2rem;
  margin-top: 30px;
  margin-bottom: 40px;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;

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
  margin-top: 30px;
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>
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

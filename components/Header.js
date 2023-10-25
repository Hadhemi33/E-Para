import Link from "next/link";
import Center from "@/components/Center";
import styled from "styled-components";
import logoPara from "../Assets/logo.svg";

import Image from "next/image";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/Bars";

const StyledHeader = styled.header`
  background-color: #fff;
  // max-height: 150px;
  border-bottom: 2px solid #39aa;

  // @media screen and (max-width: 768px) {
  //   max-height: 100px;
  //   max-width: 100%;
  // }
`;

const Logo = styled(Link)`
  // display: flex;
  // margin: 0 10px;
  // padding: 5px;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavLink = styled(Link)`
  // color: #000;
  // text-decoration: none;
  // font-size: 1.3rem;
  // align-items: center;
  // margin: 10px;
  //
  display: block;
  color: #000;
  text-decoration: none;
  padding: 15px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
const StyledNav = styled.nav`
  ${(props) =>
    props.NavActive
      ? `
display: block;`
      : `display: none;
`}

  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 100px 20px 20px;
  background-color: white;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
  //   display: flex;
  //   gap: 15px;
  //   @media screen and (max-width: 768px) {
  //     max-height: 100px;
  //     max-width: 20px;
  //   }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: black;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobilenavactive, setmobilenavactive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>
            <Image src={logoPara} alt="logo" width={300} />
          </Logo>
          <StyledNav mobilenavactive={mobilenavactive}>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/products"}>All products</NavLink>
            <NavLink href={"/categories"}>Categories</NavLink>
            
            <NavLink href={"/cart"}>Cart ({cartProducts.length})</NavLink>
          </StyledNav>
          <NavButton onClick={() => setmobilenavactive((prev) => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}

import Link from "next/link";
import Center from "@/components/Center";
import styled from "styled-components";
import logoPara from "../Assets/logo.svg";

import Image from "next/image";

const StyledHeader = styled.header`
  background-color: #222;
  max-height: 150px;
  border-bottom: 1.2px solid #39aa;

  // @media screen and (max-width: 768px) {
  //   max-height: 100px;
  //   max-width: 100%;
  // }
`;

const Logo = styled(Link)`
  // display: flex;
  // margin: 0 10px;
  // padding: 5px;
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
  color: #aaa;
  text-decoration: none;
  font-size: 1.3rem;
  align-items: center;
  margin: 10px;
`;
const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
  @media screen and (max-width: 768px) {
    max-height: 100px;
    max-width: 20px;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>
            <Image src={logoPara} alt="logo" width={300} />
          </Logo>

          <StyledNav>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/poducts"}>All products</NavLink>
            <NavLink href={"/categories"}>Categories</NavLink>
            <NavLink href={"/account"}>Account</NavLink>
            <NavLink href={"/cart"}>Cart(0)</NavLink>
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}

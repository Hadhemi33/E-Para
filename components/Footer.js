import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import DrapTun from "../Assets/tunisie.png";

const H3Footer = styled.h3`
  font-size: 2.1rem;
  font-weight: 500;
  text-transform: capitalize;
  line-height: 3rem;
  margin: 0;
`;
const SpanFooter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 100%;
  line-height: 28px;
  font-size: 14px;
  color: #cacdd2;
`;
const Footer_bottom = styled.div`
  background: white;
  width: 100vw;
  padding: 10px;
  font-size: 13px;
  padding-bottom: 40px;
  font-family: cursive;
`;
const P = styled.p`
  width: 100%;
  text-align: center;
  font-size: 15px;
  word-spacing: 2px;
  text-transform: capitalize;
`;
const A = styled.a`
  color: #44bae8;
  font-size: 15px;
  text-decoration: none;
  text-align: center;
`;
const Foooter = styled.div`
  background: white;
  display: bloc;
  position: absolute;
  height: auto;
  width: 100vw;
  margin-top: 30px;
  padding-top: 20px;
  color: #000;
`;
const Heart = styled.div`
  color: rgb(225, 213, 213);
  margin-right: 6px;
`;
const Footer_content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-family: cursive;
  box-shadow: 1px 60px 100px #87cf4e;
`;
const Footer_Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const NavLink = styled(Link)`
  display: block;
  color: #4b8b85;
  // text-decoration: none;
  padding: 15px 0;

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
const StyledMenu = styled.nav`
  gap: 10px;
  // position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5px 10px 10px;
  background-color: white;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

export default function Footer() {
  const [mobilenavactive, setmobilenavactive] = useState(false);
  return (
    <Foooter>
      <Footer_content>
        <H3Footer>𝓟𝓪𝓻𝓪𝓣𝓾𝓷</H3Footer>
        {/* <h3>𝓟𝓪𝓻𝓪𝓣𝓾𝓷</h3> */}

        <P>
          Made in{" "}
          <SpanFooter>
            <Image src={DrapTun} alt="Tun" width={20} height={20} />
          </SpanFooter>{" "}
        </P>
        <Footer_Menu>
          <StyledMenu mobilenavactive={mobilenavactive}>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/products"}>All products</NavLink>
            <NavLink href={"/categories"}>Categories</NavLink>
          </StyledMenu>
        </Footer_Menu>
      </Footer_content>

      <Footer_bottom>
        <P>
          &copy;{new Date().getFullYear()} | All rights reserved | Terms Of
          Service | Privacy
        </P>
      </Footer_bottom>
    </Foooter>
  );
}

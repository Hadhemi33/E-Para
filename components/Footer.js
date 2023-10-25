import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Footer_content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-family: cursive;
  box-shadow: 1px 60px 100px #87cf4e;
`;
const H3Footer = styled.h3`
  font-size: 2.1rem;
  font-weight: 500;
  text-transform: capitalize;
  line-height: 3rem;
`;
const SpanFooter = styled.span`
  max-width: 500px;
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
  height: auto;
  width: 100vw;
  margin-top: 30px;
  padding-top: 20px;
  color: #000;
`;
const Heart = styled.div`
  color: rgb(225, 213, 213);
`;
export default function Footer() {
  return (
    <Foooter>
      <Footer_content>
        <H3Footer>𝓟𝓪𝓻𝓪𝓣𝓾𝓷</H3Footer>
        <P>
          Made with{" "}
          <SpanFooter>
            <Heart> &#10084;</Heart>
          </SpanFooter>{" "}
        </P>
        <Link href={"/"}>Home</Link>
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

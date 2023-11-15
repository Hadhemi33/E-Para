import React from "react";

import styled from "styled-components";
import Link from "next/link";
import Button from "@/components/Button";
import Center from "@/components/Center";

const Container = styled.div`
  align-items: center;
  justify-content: space-between;

  //   background-color: #ffffff;

  //   box-shadow: 0 0 100px 20px rgba(45, 73, 47, 0.2);
  margin-top: 50px;
`;
const ContactStyled = styled.div`
  color: #0b0c0b;
  text-align: center;
  margin-top: 30px;
  //   padding: 1rem;
`;
const P = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  width: 60%;
  font-weight: bold;
`;
// const Button = styled.button`

//                   fontSize: "1.3rem",
// `;
const Contact_content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  font-family: cursive;
`;
const Contact_left_Right = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Contact_form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const SpanCon = styled.span`
  color: #44a94b;
  font-weight: bold;
  font-size: 1.5rem;
`;
const H33 = styled.h3`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #07490b;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
const Contact_form_text = styled.input`
  color: blanchedalmond;
  outline: none;
  border-left: 2px solid #4f8d3c93;
  border-bottom: 2px solid #4f8d3c93;
  padding: 1rem;
  margin-bottom: 1rem;
`;
const Textarea = styled.input`
  width: 95%;
  height: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  border: none;
  border-radius: 5px;

  outline: none;
  border-left: 2px solid #4f8d3c93;
  border-bottom: 2px solid #4f8d3c93;
`;
export default function Contact() {
  return (
    <Center>
      <Container>
        <ContactStyled>
          <H33>Contactez-nous</H33>
          <Contact_content>
            <Contact_left_Right>
              <P>
                <SpanCon>Visitez-nous : </SpanCon>
                <br />
                08 Rue Newton, Ariana <br /> 2088 Tunisia
              </P>
              <br />

              <P>
                <SpanCon>Appelez-nous :</SpanCon>
                <br />
                +216 123 456 789
              </P>
              <br />

              <P>
                <SpanCon>Écrivez-nous</SpanCon>
                <br />
                paratuncontactini@gmail.com
              </P>
            </Contact_left_Right>

            <Contact_left_Right>
              <Contact_form
                action="https://formsubmit.co/paratuncontactini@gmail.com"
                method="POST"
              >
                <Textarea
                  style={{
                    fontSize: "1rem",
                  }}
                  type="text"
                  name="name"
                  required
                  placeholder="Nom"
                />
                <Textarea
                  style={{
                    fontSize: "1rem",
                  }}
                  type="email"
                  name="email"
                  required
                  placeholder="Adresse e-mail"
                />
                {/* <Contact_form_text */}
                <Textarea
                  style={{
                    fontSize: "1rem",
                  }}
                  type="text"
                  name="phone"
                  required
                  placeholder="Numéro de téléphone"
                />
                <Textarea
                  style={{
                    fontSize: "1rem",
                  }}
                  name="msg"
                  required
                  placeholder="Message"
                ></Textarea>
                <Button primary={1} size="l" type="submit" value="Send">
                  <Center>Envoyer</Center>
                </Button>
              </Contact_form>
            </Contact_left_Right>
          </Contact_content>
        </ContactStyled>
      </Container>
    </Center>
  );
}

import styled, { css } from "styled-components";
import { primary } from "@/lib/colors";
export const ButtonStyle = css`
  border: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 500;

  padding: 5px 15px;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
  }
  svg {
    height: 16px;
    margin-right: 5px;
  }
  ${(props) =>
    props.white &&
    !props.outline &&
    css`
      background-color: #fff;
      color: #000;
    `}
  ${(props) =>
    props.white &&
    props.outline &&
    css`
      background-color: transparent;
      color: #000;
      border: 1.5px solid #000;
    `}

    ${(props) =>
    props.primary &&
    !props.outline &&
    css`
      background-color: ${primary};
      color: #fff;
      border: 1.5px solid ${primary};
      &:hover {
        box-shadow: 0 0 5px white, 0 0 30px ${primary};
      }
    `}${(props) =>
    props.primary &&
    props.outline &&
    css`
      background-color: transparent;
      color: ${primary};
      border: 1.5px solid ${primary};
      &:hover {
        box-shadow: 0 0 5px white, 0 0 30px ${primary};
      }
    `}

  ${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;
      svg {
        height: 20px;
        margin-right: 5px;
      }
    `}
`;
export const StyledButton = styled.button`
  ${ButtonStyle}
`;
export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

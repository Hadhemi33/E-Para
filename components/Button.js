import styled, { css } from "styled-components";

export const ButtonStyle = css`
  border: 0;

  padding: 5px 15px;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
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
      border: 1px solid #000;
    `}

  ${(props) =>
    props.primary &&
    css`
      background-color: #82cd47;
      color: #fff;
      border: 1px solid #82cd47;
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

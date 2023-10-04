import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 7px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  @media screen and (min-width: 768px) {
    padding: 15px;
    margin-bottom: 20px;
  }
`;
export default function Input(props) {
  return <StyledInput {...props} />;
}

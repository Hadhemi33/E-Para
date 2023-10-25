import styled from "styled-components";

import Center from "./Center";

const SearchBarStyled = styled.input`
  // padding:5px 70px ;
  // min-width: 150%;
  //   background-color: red;

  font-size: 1.2rem;
  height: 30px;
  border-radius: 5px;
  border-block: none;
  // border-block-start: none;
  border-bottom: 2px solid #9ece9f;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <Center>
      <SearchBarStyled
        value={searchTerm}
        type="text"
        placeholder=" &#x1F50E;&#xFE0E;  Search product..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Center>
  );
}

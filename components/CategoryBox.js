import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/Cart";
import Link from "next/link";
const Title = styled(Link)`
  font-weight: bold;
  font-size: 1rem;
  color: inherit;
  text-decoration: none;
  margin: 5px;
`;
const CategoryWrapper = styled.div`
  border: 4px solid #eefffb;
  border-radius: 10px;
`;
const CategoryInfoBox = styled.div`
  padding: 10px;
`;

export default function ProductBox({ _id, name }) {
  const url = "/category/" + _id;
  return (
    <CategoryWrapper>
      <CategoryInfoBox>
        <Title href={url}>{name}</Title>
      </CategoryInfoBox>
    </CategoryWrapper>
  );
}

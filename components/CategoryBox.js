import styled from "styled-components";
import Link from "next/link";
const Title = styled(Link)`
  font-weight: bold;
  font-size: 1rem;
  color: inherit;
  text-decoration: none;
  margin: 5px;
`;
const CategoryWrapper = styled.div`
  border: 2px solid #619a35;
  border-radius: 10px;
`;
const CategoryInfoBox = styled.div`
  padding: 10px;
`;

export default function CategoryBox({ _id, name }) {
  const url = "/categories/" + _id;
  // const url = `/category/${_id}`; // Lien dynamique vers la page de catégorie
  return (
    <CategoryWrapper>
      <CategoryInfoBox>
        <Title href={url}>{name}</Title>
      </CategoryInfoBox>
    </CategoryWrapper>
  );
}

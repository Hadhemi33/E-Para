import styled from "styled-components";
import CategoryBox from "@/components/CategoryBox";

const StyledCategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default function CategoriesGrid({ categories }) {
  return (
    <StyledCategoriesGrid>
      {categories?.length > 0 &&
        categories.map((categorie) => (
          <CategoryBox key={categorie._id} {...categorie} />
        ))}
    </StyledCategoriesGrid>
  );
}

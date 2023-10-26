// import styled from "styled-components";
// import Button from "./Button";
import { primary } from "@/lib/colors";

// const SearchBarStyled = styled.input`
//   padding: 5px 50px;
//   min-width: 120px;
//   // background-color: red;
//   margin-right: 20px;

//   font-size: 1.2rem;
//   height: 30px;
//   border-radius: 5px;
//   border-block: none;
//   // border-block-start: none;
//   border-bottom: 2px solid #9ece9f;
//   @media screen and (max-width: 768px) {
//     width: 80%;
//     margin: 0;
//   }
// `;
// const StyledButtom = styled.button`
//   max-width: 30px;
//   height: 30px;
//   background-color: transparent;
//   color: ${primary};
//   // border: 1.5px solid ${primary};
//   border: none;
//   &:hover {
//     box-shadow: 0 0 5px white, 0 0 30px ${primary};
//   }
// `;
// const Styleddiv = styled.div`
//   max-width: 120%;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;

// export default function SearchBar({
//   searchTerm,
//   setSearchTerm,
//   onSearchClick,
// }) {
//   const handleSearchClick = () => {
//     setSearchTerm(searchTerm);
//     // Appelez la fonction onSearchClick pour effectuer la recherche
//     onSearchClick();
//   };
//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           placeholder="  Search product..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <button primary outline onClick={handleSearchClick}>
//           &#x1F50E;&#xFE0E;
//         </button>
//       </div>
//     </>
//   );
// }
import styled from "styled-components";

const SearchBarStyled = styled.input`
  width: 60%;
  padding: 5px 50px;
  min-width: 170px;
  // background-color: red;
  margin-left: 20%;
  margin-bottom: 20px;

  font-size: 1.2rem;
  height: 30px;
  border-radius: 5px;
  border-block: none;
  // border-block-start: none;
  border-bottom: 2px solid #9ece9f;
  @media screen and (max-width: 768px) {
    width: 70%;
    margin: 0;
    margin-bottom: 10px;
  }
`;
const StyledButtom = styled.button`
  font-size: 1.2rem;
  margin-left: 10px;

  max-width: 30px;
  height: 30px;
  background-color: transparent;
  color: #0c5b6b;
  // border: 1.5px solid ${primary};
  border: none;
  &:hover {
    box-shadow: 0 0 70px white, 0 0 50px #0c5b6b;
  }
`;
export default function SearchBar({
  searchTerm,
  setSearchTerm,
  onSearchClick,
}) {
  const handleSearchClick = () => {
    setSearchTerm(searchTerm);

    onSearchClick();
  };

  return (
    <>
      <SearchBarStyled
        type="text"
        placeholder="   Search product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <StyledButtom onClick={handleSearchClick}>&#x1F50E;&#xFE0E;</StyledButtom>
    </>
  );
}

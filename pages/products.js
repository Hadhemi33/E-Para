import React, { useState } from "react";
import Header from "@/components/Header";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";
import { mongooseConnect } from "@/lib/mongoose";
import SearchBar from "@/components/SearchBar";
import { Product } from "@/models/Product";
import styled from "styled-components";

const ProductsPage = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  // const filteredProducts = products.filter((product) =>
  //   product.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const ProductsSearchdiv = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    // display: flex;
    // justify-content: space-between;
    align-items: center;
  `;

  const Title = styled.h1`
font-size:2rem
 margin: 30px 0 20px;
 font-weight: 500;
 color :#638163;
 // color: #36591d

`;
  const handleSearchClick = () => {
    // Filtrer les produits basés sur la valeur de searchTerm
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      {/* <Center>
      <ProductsSearchdiv>
        <Title>𝓐𝓵𝓵 𝓹𝓻𝓸𝓭𝓾𝓬𝓽𝓼</Title>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearchClick={handleSearchClick}
        />
        </ProductsSearchdiv>
        <ProductsGrid products={filteredProducts} />
      </Center> */}
      <Center>
        <Title>Tous les produits</Title>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearchClick={handleSearchClick} // Assurez-vous que la fonction est passée ici
        />
        <ProductsGrid products={filteredProducts} />
      </Center>
    </>
  );
};

export default ProductsPage;
export async function getServerSideProps({ query }) {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

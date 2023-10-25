// import Header from "@/components/Header";
// import styled from "styled-components";
// import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import SearchBar from "@/components/SearchBar";
// import { Product } from "@/models/Product";
// import ProductsGrid from "@/components/ProductsGrid";
// import Title from "@/components/Title";

// export default function ProductsPage({ products }) {
//   return (
//     <>
//       <Header />
//       <Center>
//         <Title>All products</Title>
//         <ProductsGrid products={products} />
//       </Center>
//     </>
//   );
// }

// export async function getServerSideProps({ query }) {
//   await mongooseConnect();
//   const products = await Product.find({}, null, { sort: { _id: -1 } });
//   return {
//     props: {
//       products: JSON.parse(JSON.stringify(products)),
//     },
//   };
// }
import React, { useState } from "react";
import Header from "@/components/Header";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import { Product } from "@/models/Product";
import styled from "styled-components";

const ProductsPage = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const ProductsSearchdiv = styled.div`
   
     width: 100%;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    // display: flex;
    // justify-content: space-between;
    align-items: center;
  `;

  return (
    <>
      <Header />
      <Center>
        <ProductsSearchdiv>
          <Title>𝓐𝓵𝓵 𝓹𝓻𝓸𝓭𝓾𝓬𝓽𝓼</Title>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </ProductsSearchdiv>
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

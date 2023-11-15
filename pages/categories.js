// Importez mongoose et votre modèle de catégorie
// import mongoose from "mongoose";
// import { Category } from "@/models/Category";
// export async function getServerSideProps({ query }) {
//   await mongoose.connect();

//   // Récupérez les catégories depuis la base de données
//   const categories = await Category.find({}, null, { sort: { _id: -1 } });

//   // Transformez les catégories en chaîne JSON et revenez à un objet JSON
//   const formattedCategories = JSON.parse(JSON.stringify(categories));

//   // Fermez la connexion à la base de données
//   await mongoose.disconnect();

//   // Passez les catégories en tant que propriétés au composant React
//   return {
//     props: {
//       categories: formattedCategories,
//     },
//   };
// }

import React, { useState } from "react";
import Header from "@/components/Header";
import Center from "@/components/Center";
import CategoriesGrid from "@/components/CategoriesGrid";
import styled from "styled-components";
import { Category } from "@/models/Category";
import { mongooseConnect } from "@/lib/mongoose";
import Footer from "@/components/Footer";
const CategoryPage = ({ categories }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter((categorie) =>
    categorie.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const Title = styled.h1`
  font-size:2rem
   margin: 30px 0 20px;
   font-weight: 500;
   color :#638163;
   // color: #36591d
  
  `;

  return (
    <>
      <Center>
        <Title>Toutes les catégories</Title>

        <CategoriesGrid categories={filteredCategories} />
      </Center>
    </>
  );
};

export default CategoryPage;
export async function getServerSideProps({ query }) {
  await mongooseConnect();
  const categories = await Category?.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}

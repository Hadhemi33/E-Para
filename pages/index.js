import Featured from "@/components/Featured";
import Header from "@/components/Header";
import styled from "styled-components";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";


export default function HomePage({ featuredProduct, newProducts }) {
  console.log({ newProducts });
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} />
      <NewProducts product={newProducts} />
    </div>
  );
}
export async function getServerSideProps() {
  const featuredProductID = "650c5930e5f0d0524272c7bb";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductID);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },

    limit: 10,
  });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}

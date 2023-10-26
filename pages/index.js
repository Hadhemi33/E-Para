import Featured from "@/components/Featured";
import Header from "@/components/Header";
import styled from "styled-components";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import ButtonLink from "../components/ButtonLink";
import Button from "../components/Button";
import Footer from "@/components/Footer";

export default function HomePage({ featuredProduct, newProducts }) {
  console.log({ newProducts });
  return (
    <div>
 
      <Featured product={featuredProduct} />
      <NewProducts product={newProducts} />
      <ButtonLink href={"/products"} primary={1} center={1} size="l">
        Find More &#10095;
      </ButtonLink>
    </div>
  );
}
export async function getServerSideProps() {
  const featuredProductID = "65392189cb8b61b8d3cbc181";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductID);
  const newProducts = await Product.find(
    {},
    null,
    {
      sort: { _id: -1 },

      limit: 8,
    }
    //button read more
  );
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}

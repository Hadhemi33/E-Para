import Featured from "@/components/Featured";
import Header from "@/components/Header";
import styled from "styled-components";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

export default function HomePage({ product }) {
  return (
    <div>
      <Header />
      <Featured product={product} />
    </div>
  );
}
export async function getServerSideProps() {
  const featuredProductId = "650b08476d254636537b94a2";
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}

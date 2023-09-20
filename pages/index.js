import Featured from "@/components/Featured";
import Header from "@/components/Header";
import styled from "styled-components";
// import { Product } from "./lib/models/Product";
// import mongooseConnect from "./lib/mongooseConnect";

export default function HomePage({ product }) {
  console.log(product);
  return (
    <div>
      <Header />
      <Featured />
    </div>
  );
}
// export async function getServerSideProps() {
//   const featuredProductId = "";
//   await mongooseConnect();
//   const product = await Product.findById(featuredProductId);
//   return {
//     props: {
//       product,
//     },
//   };
// }

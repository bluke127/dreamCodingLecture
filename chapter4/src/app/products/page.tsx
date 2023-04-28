import MeowAritcle from "@/components/MeowAritcle";
import { getProducts } from "@/service/products";
import Link from "next/link";
import clothesImage from "../../../public/images/clothes";
// export const revalidate = 3;

// const products = ['shirt', 'pants', 'skirt', 'shoes'];

export default async function ProductsPage() {
  const products = await getProducts();
  const res = await fetch("https://meowfacts.herokuapp.com", {
    next: { revalidate: 3 }, //이거랑 같은말
    cache: "no-store", //default는 ssg, no-store하면 revalidate:0과 같다
  });

  const data = await res.json();
  const factText = data.data[0];
  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      {/* @ts-expect-error Server Component */}
      <MeowAritcle />
    </>
  );
}

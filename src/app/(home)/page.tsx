import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div>
      <Image
        src="/banner-home-01.png"
        width={150}
        height={350}
        alt="Até 55% de desconto"
        className="h-auto w-full px-5"
        sizes="100vw"
      />
      <div className="mt-8">
        <Categories />
      </div>
      <div className="mt-8">
        <ProductList products={deals} />
      </div>
    </div>
  );
}

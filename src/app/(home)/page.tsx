
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
    <div className="p-5">
      <Image
        src="/banner-home-01.png"
        width={150}
        height={350}
        alt="Até 55% de desconto"
        className="h-auto w-full"
        sizes="100vw"
      />
      <div className="mt-8">
        <Categories />
      </div>
      <div>
        <ProductList products={deals}/>
      </div>
    </div>
  );
}

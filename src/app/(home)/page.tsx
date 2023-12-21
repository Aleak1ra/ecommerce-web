import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "../../components/ui/product-list";
import SectionTitle from "../../components/ui/section-title";
import PromoBanner from "./components/promo-banner";
import Link from "next/link";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className="flex flex-col gap-8 py-8">
      <Link href={"/deals"}>
        <PromoBanner src="/banner-home-01.png" alt="Até 55% de desconto" />
      </Link>
      <div>
        <Categories />
      </div>
      <div>
        <Link href={"/deals"}>
          <SectionTitle>Ofertas</SectionTitle>
        </Link>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="Até 55% de desconto em mouses"
      />

      <div>
        <Link href={"/category/keyboards"}>
          <SectionTitle>Teclados</SectionTitle>
        </Link>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        src="/banner-home-03.png"
        alt="Até 55% de desconto em mouses"
      />

      <div>
        <Link href={"/category/mouses"}>
          <SectionTitle>Mouses</SectionTitle>
        </Link>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}

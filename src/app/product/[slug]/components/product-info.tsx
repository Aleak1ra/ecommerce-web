"use client";

import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/products";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  TruckIcon,
} from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
  product: Pick<
    ProductWithTotalPrice,
    "basePrice" | "description" | "discountPercentage" | "totalPrice" | "name"
  >;
}

const ProductInfo = ({
  product: { name, basePrice, totalPrice, description, discountPercentage },
}: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  return (
    <div className="flex flex-col gap-1 px-5">
      <h2 className="text-3xl">{name}</h2>
      <div className="flex items-center gap-1">
        <h1 className="text-3xl font-bold">R$ {totalPrice.toFixed(2)}</h1>
        {discountPercentage > 0 && (
          <DiscountBadge>
            {discountPercentage}
          </DiscountBadge>
        )}
      </div>

      {discountPercentage > 0 && (
        <p className="text-lg line-through opacity-75">
          {" "}
          R$ {Number(basePrice).toFixed(2)}
        </p>
      )}

      <div className="mt-2  flex items-center gap-2">
        <Button
          onClick={handleDecreaseQuantityClick}
          size={"icon"}
          variant={"outline"}
        >
          <ArrowLeftIcon size={16} />
        </Button>

        <span className="text-xl font-extrabold">{quantity}</span>

        <Button
          onClick={handleIncreaseQuantityClick}
          size={"icon"}
          variant={"outline"}
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold ">Descrição</h3>
        <p className="text-justify text-sm opacity-60">{description}</p>
      </div>

      <Button className="mt-8 text-base font-bold">
        ADICIONAR AO CARRINHO
      </Button>

      <div className="mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2 ">
        <div className="flex items-center gap-2">
          <TruckIcon size={30} />
        </div>
        <div className="flex flex-col ">
          <p className="text-xs ">
            Entrega via <span className="font-bold">Feddex Packet®</span>
          </p>
          <p className="text-[#8162FF]">
            Enviamos para <span className="font-semibold">todo o Brasil</span>
          </p>
        </div>
        <p className="font-bold">Frete Grátis!</p>
      </div>
    </div>
  );
};

export default ProductInfo;

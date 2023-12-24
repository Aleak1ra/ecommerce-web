"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, ShoppingCart, Terminal, TruckIcon } from "lucide-react";
import { useContext, useState } from "react";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart } = useContext(CartContext);
  const [showAlert, setShowAlert] = useState(false);

  const handleIncreaseQuantityClick = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantityClick = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleAddToCartClick = () => {
    addProductToCart({ ...product, quantity });
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };


  

  return (
    <div className="flex flex-col gap-1 px-5">
      <h2 className="text-3xl">{product.name}</h2>
      <div className="flex items-center gap-1">
        <h1 className="text-3xl font-bold">
          R$ {product.totalPrice.toFixed(2)}
        </h1>
        {product.discountPercentage > 0 && (
          <DiscountBadge className="animate-bounce">{product.discountPercentage}</DiscountBadge>
        )}
      </div>

      {product.discountPercentage > 0 && (
        <p className="text-lg line-through opacity-75">
          {" "}
          R$ {Number(product.basePrice).toFixed(2)}
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
        <p className="text-justify text-sm opacity-60">{product.description}</p>
      </div>

      <Button
        className="mt-8 text-base font-bold uppercase"
        onClick={handleAddToCartClick}
      >
        Adicionar ao carrinho
      </Button>

      <div className="md:fixed md:top-[110px] md:right-2 sm:fixed sm:top-[100px] sm:right-5 z-50">
        {showAlert && (
          <Alert>
            <ShoppingCart className="animate-bounce h-4 w-4" />
            <AlertTitle>Pronto!</AlertTitle>
            <AlertDescription>Produto adicionado ao carrinho.</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2 text-center">
        <div className="flex items-center gap-2">
          <TruckIcon size={30} />
        </div>
        <div className="flex flex-col justify-center items-center ">
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

import { ProductWithTotalPrice } from "@/helpers/products";

import Image from "next/image";

interface CartItemProps {
  product: ProductWithTotalPrice;
}

const CartItem = ({ product }: CartItemProps) => {
  return (
    <div className="items-center flex gap-2">
      <div className="items-center flex gap-2">
        <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent ">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            alt={product.name}
            className="h-max-[70%] w-max-[80%] h-auto w-auto"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <p className="text-xs">{product.name}</p>

        <div className="flex items-center gap-2">
                  <p className="text-sm font-bold">R$ {product.totalPrice.toFixed(2)}</p>
                  

                  {product.discountPercentage > 0 && (
                      <p className="text-xs line-through opacity-75">R$ {Number(product.basePrice) }</p>
                  )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;

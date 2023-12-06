
import Image from "next/image";
import { Button } from "./button";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";
import { CartContext, CartProduct } from "@/providers/cart";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  const { decreaseProductQuantity, increaseProductQuantity, removeProductFromCart } =
    useContext(CartContext);

  const handleDecreaseProductQuantity = () => {
    decreaseProductQuantity(product.id);
  };

  const handleIncreaseProductQuantity = () => {
    increaseProductQuantity(product.id);
  };

  const handleRemoveProductFromCart = () => {
    removeProductFromCart(product.id);
  };

  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-4 ">
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

        <div className="flex flex-col">
          <p className="text-xs">{product.name}</p>

          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">
              R$ {product.totalPrice.toFixed(2)}
            </p>

            {product.discountPercentage > 0 && (
              <p className="text-xs line-through opacity-75">
                R$ {Number(product.basePrice)}
              </p>
            )}
          </div>
          <div className="flex items-center gap-1">
            <Button size={"icon"} variant={"outline"} className="h-8 w-8">
              <ArrowLeftIcon
                onClick={handleDecreaseProductQuantity}
                size={16}
              />
            </Button>

            <span className="text-base font-extrabold">{product.quantity}</span>

            <Button
              size={"icon"}
              variant={"outline"}
              className="h-8 w-8"
              onClick={handleIncreaseProductQuantity}
            >
              <ArrowRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>
      <Button size={"icon"} variant={"outline"} onClick={handleRemoveProductFromCart}>
        <TrashIcon size={16} />
      </Button>
    </div>
  );
};

export default CartItem;

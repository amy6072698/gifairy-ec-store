import type { Product } from "@/types/product";
import { GoHeartFill } from "react-icons/go";
import { useNavigate } from "react-router";
import Badge from "./Badge";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const { attributes } = product;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div
      key={product.id}
      className={`group cursor-pointer ${className}`}
      onClick={handleClick}
    >
      <div className="product-image relative mb-3 overflow-hidden rounded-[2px]">
        <div className="bg-linear-[180deg,rgba(0,0,0,0)_70%,rgba(0,0,0,0.2)_90%,rgba(0,0,0,0.4)] absolute inset-0 z-[1] opacity-0 group-hover:opacity-100"></div>
        <img
          className="h-full w-full object-cover duration-[0.3s] group-hover:scale-[1.1]"
          src={product.image}
          alt={product.title}
        />
        {product.status && (
          <Badge className="absolute top-0 z-[2] rounded-bl-none rounded-tr-none bg-red-400">
            {product.status}
          </Badge>
        )}

        <div className="absolute bottom-1 right-1 z-[2]">
          <button className="cursor-pointer p-2">
            <GoHeartFill
              size="1.5rem"
              className="group-hover:fill-pri-purple-400 fill-[rgba(82,41,71,0.5)] stroke-white stroke-[1.5]"
            />
          </button>
        </div>
      </div>
      <div className="product-content">
        <h4 className="text-pri-purple-400 mb-1 text-[1rem] font-medium sm:text-[1.125rem]">
          {product.title}
        </h4>
        <p className="mb-1 text-[0.875rem] text-neutral-500">
          {attributes.category_zh}
        </p>
        <div className="flex items-center gap-1">
          <p className="text-[1rem] font-medium sm:text-[1.125rem]">
            NT$ {product.price.toLocaleString()}
          </p>
          {product.originPrice && (
            <p className="text-[0.875rem] text-neutral-500 line-through">
              NT$ {product.originPrice.toLocaleString()}
            </p>
          )}
        </div>
        {/* Badge */}
        <div className="mt-2 flex items-center gap-1">
          {attributes.customizable && (
            <Badge className="bg-pri-purple-200 px-1 py-0.5 text-[0.75rem]">
              可客製
            </Badge>
          )}
          {attributes.handmade && (
            <Badge className="bg-pri-purple-200 px-1 py-0.5 text-[0.75rem]">
              手工製作
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

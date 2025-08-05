import type { Product } from "@/types/product";
import { GoHeartFill } from "react-icons/go";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  return (
    <div key={product.id} className={`group cursor-pointer ${className}`}>
      <div className="product-image relative mb-3 overflow-hidden rounded-[2px]">
        <div className="bg-linear-[180deg,rgba(0,0,0,0)_70%,rgba(0,0,0,0.2)_90%,rgba(0,0,0,0.4)] absolute inset-0 z-[1] opacity-0 group-hover:opacity-100"></div>
        <img
          className="h-full w-full object-cover duration-[0.3s] group-hover:scale-[1.1]"
          src={product.image}
          alt={product.title}
        />
        {product.status && (
          <div className="absolute top-0 z-[2] rounded-br-[2px] bg-red-400 px-2 text-white">
            <span className="text-[0.875rem]/[1.75]">{product.status}</span>
          </div>
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
          {product.category}
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
      </div>
    </div>
  );
};

export default ProductCard;

import type { Product } from "@/types/product";
import { GoHeartFill } from "react-icons/go";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div key={product.id} className="p-2 sm:p-4">
      <div className="product-image relative mb-3 overflow-hidden rounded-[2px]">
        <img
          className="h-full w-full object-cover duration-[0.3s] hover:scale-[1.1]"
          src={product.image}
          alt={product.title}
        />
        {product.status && (
          <div className="absolute top-0 rounded-br-[2px] bg-red-400 px-2 text-white">
            <span className="text-[0.875rem]/[1.75]">{product.status}</span>
          </div>
        )}

        <div className="absolute bottom-1 right-1">
          <button className="hover:text-pri-purple-100 m-2 cursor-pointer text-white">
            <GoHeartFill
              size="1.5rem"
              className="fill-[rgba(0,0,0,0.5)] stroke-white stroke-2 hover:fill-black"
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

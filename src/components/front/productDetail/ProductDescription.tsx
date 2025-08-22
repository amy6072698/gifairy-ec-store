import type { Product } from "@/types/product";
import ProductDetailTitle from "./ProductDetailTitle";

interface ProductDescriptionProps {
  product: Product;
}

const ProductDescription = ({ product }: ProductDescriptionProps) => {
  return (
    <section className="mb-15">
      <ProductDetailTitle title="商品描述" className="flex justify-center" />
      <div className="mx-auto w-8/12">
        <div className="flex flex-col items-center">
          <div className="bg-pri-purple-100 mx-10 w-full px-20 pb-10 pt-6">
            <h2 className="text-pri-purple-400 mb-2 text-center text-[1.125rem] font-medium">
              {product.title}
            </h2>
            <p className="mb-4 px-3 text-center">{product.description}</p>
            <img
              src={product.images[0]}
              alt={product.title}
              className="mx-auto rounded-[2px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;

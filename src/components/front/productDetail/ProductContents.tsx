import ProductDetailSlider from "@/components/front/sliders/ProductDetailSlider";
import RatingStars from "@/components/common/RatingStars";
import { PrimaryButton, SecondaryButton } from "@/components/common/Buttons";
import Counter from "@/components/common/Counter";
import type { Product } from "@/types/product";
import ProductDetailTable from "./ProductDetailTable";
import ProductDetailTitle from "./ProductDetailTitle";
import { Badge } from "@/components/common/Badges";

interface ProductContentsProps {
  product: Product;
}

const ProductContents = ({ product }: ProductContentsProps) => {
  const { meta, details, attributes } = product;

  return (
    <section className="mb-20 flex items-start gap-16">
      {/* Images Slider */}
      <div className="px-15 w-7/12">
        <ProductDetailSlider product={product} />
      </div>
      {/* Content */}
      <div className="w-5/12">
        <h1 className="mb-2 text-[1.5rem] font-medium">{product.title}</h1>
        <RatingStars rating={meta.rating} className="mb-2 gap-2">
          <p className="border-s-[1px] border-neutral-500 pl-2 text-neutral-500">
            {meta.reviewCount} 則評價
          </p>
        </RatingStars>
        <div className="mb-3 flex items-center gap-2">
          <p className="text-pri-purple-200 text-[1.75rem] font-medium">
            NT$ {product.price.toLocaleString()}
          </p>
          {product.originPrice && (
            <p className="mt-1 text-neutral-500 line-through">
              NT$ {product.originPrice.toLocaleString()}
            </p>
          )}
        </div>

        {/* Badge */}
        <div className="mb-10 flex items-center gap-3">
          {attributes.customizable && (
            <Badge
              outline={true}
              className="border-sec-yellow-600 text-sec-yellow-600"
            >
              可客製
            </Badge>
          )}
          {attributes.handmade && (
            <Badge
              outline={true}
              className="border-sec-yellow-600 text-sec-yellow-600"
            >
              手工製作
            </Badge>
          )}
        </div>

        <div className="mb-10 flex items-center gap-2">
          <Counter />
          {product.stock <= 5 ? (
            <p className="text-red-400">剩下最後 {product.stock} 件</p>
          ) : (
            <p className="text-neutral-500">剩下 {product.stock} 件</p>
          )}
        </div>
        <ul className="mb-10 flex flex-col gap-3">
          <li>
            <PrimaryButton className="w-full">加入購物車</PrimaryButton>
          </li>
          <li>
            <SecondaryButton className="w-full">加入收藏清單</SecondaryButton>
          </li>
        </ul>
        <div>
          <ProductDetailTitle title="商品資訊" />
          <ProductDetailTable details={details} attributes={attributes} />
        </div>
      </div>
    </section>
  );
};

export default ProductContents;

import ProductSlider from "@/components/front/sliders/ProductSlider";
import { hotProductsData } from "@/data/products";
import ProductDetailTitle from "./ProductDetailTitle";

const RecommendProducts = () => {
  return (
    <section className="mb-20">
      <ProductDetailTitle title="猜你喜歡" className="flex justify-center" />
      <div>
        <ProductSlider className="pb-0 pt-0" products={hotProductsData} />
      </div>
    </section>
  );
};

export default RecommendProducts;

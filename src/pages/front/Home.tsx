import Advantage from "@/components/front/home/Advantage";
import HeroCarousel from "@/components/front/sliders/HeroSlider";
import ProductSlider from "@/components/front/sliders/ProductSlider";
import RecommendSlider from "@/components/front/sliders/RecommendSlider";
import ThemeSlider from "@/components/front/sliders/ThemeSlider";
import {
  hotProductsData,
  newProductsData,
  saleProductsData,
} from "@/data/products/products";

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <ProductSlider title="熱門商品" products={hotProductsData} />
      <ThemeSlider />
      <ProductSlider title="近期優惠" products={saleProductsData} />
      <RecommendSlider />
      <ProductSlider title="新品上架" products={newProductsData} />
      <Advantage />
    </div>
  );
};

export default Home;

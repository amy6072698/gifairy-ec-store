import Advantage from "@/components/front/home/Advantage";
import HeroCarousel from "@/components/front/sliders/HeroSlider";
import RecommendSlider from "@/components/front/sliders/RecommendSlider";
import ThemeSlider from "@/components/front/sliders/ThemeSlider";

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <h1 className="mb-4 text-2xl font-bold">Welcome to Home Page</h1>
      <ThemeSlider />
      <RecommendSlider />
      <Advantage />
    </div>
  );
};

export default Home;

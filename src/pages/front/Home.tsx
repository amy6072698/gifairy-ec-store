import Advantage from "@/components/front/home/Advantage"
import HeroCarousel from "@/components/front/sliders/HeroSlider"
import ThemeSlider from "@/components/front/sliders/ThemeSlider"

const Home = () => {
  return (
    <div>
      <HeroCarousel />
      <ThemeSlider />
      <Advantage />
      <h1 className="text-2xl mb-4 font-bold">Welcome to Home Page</h1>
    </div>
  )
}

export default Home
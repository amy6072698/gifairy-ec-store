import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import type { Product } from "@/types/product";
import ProductCard from "@/components/common/ProductCard";

interface ProductSliderProps {
  title: string;
  products: Product[];
}

// NextArrow
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} -translate-x-[100%] -translate-y-1/2 before:hidden xl:-translate-x-0`}
      style={{
        ...style,
        top: "40%",
        right: "-1%",
        zIndex: 1,
        display: "block",
      }}
      onClick={onClick}
    >
      <button className="hover:text-pri-purple-200 text-pri-purple-300 active:text-pri-purple-200 cursor-pointer rounded-full bg-white p-1 shadow-[0_2px_4px_2px_rgba(125,110,85,0.2)]">
        <BsChevronCompactRight className="text-[1.5rem]" strokeWidth={0.5} />
      </button>
    </div>
  );
};

// PrevArrow
const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} -translate-y-1/2 translate-x-[100%] before:hidden xl:translate-x-0`}
      style={{
        ...style,
        top: "40%",
        left: "-2%",
        zIndex: 1,
        display: "block",
      }}
      onClick={onClick}
    >
      <button className="hover:text-pri-purple-200 text-pri-purple-300 active:text-pri-purple-200 cursor-pointer rounded-full bg-white p-1 shadow-[0_2px_4px_2px_rgba(125,110,85,0.2)]">
        <BsChevronCompactLeft className="text-[1.5rem]" strokeWidth={0.5} />
      </button>
    </div>
  );
};

// Slider
const ProductSlider = ({ title, products }: ProductSliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="pb-30 mx-auto max-w-[1140px] px-3 pt-20">
      <div className="mx-0 xl:mx-4">
        <h2 className="text-pri-purple-500 mb-2 ml-2 flex text-[1.125rem] font-medium sm:ml-4 sm:text-[1.5rem]">
          {title}
        </h2>
        <div className="slider-container h-full w-full">
          <Slider {...settings}>
            {products.map((product) => (
              <ProductCard product={product} className="p-2 sm:p-4" />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;

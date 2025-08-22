import type { Product } from "@/types/product";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper/types";

interface ProductDetailSliderProps {
  product: Product;
}

const ProductDetailSlider = ({ product }: ProductDetailSliderProps) => {
  const { id, title, images } = product;
  const [activeThumb, setActiveThumb] = useState<SwiperType | null>(null);

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={{
          enabled: true,
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        thumbs={{ swiper: activeThumb }}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        className="product-detail-slider"
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${id}_image${index + 1}`}>
            <div className="w-fulls">
              <img
                src={image}
                className="object-cover object-center"
                alt={`${title}圖${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
        <button
          className="prev-btn hover:text-pri-purple-200 text-pri-purple-300 active:text-pri-purple-200 absolute left-0 top-1/2 z-[5] -translate-y-1/2 cursor-pointer bg-white shadow-[2px_0_4px_1px_rgba(125,110,85,0.2)]"
          aria-label="上一張圖"
        >
          <BsChevronCompactLeft
            className="my-3 text-[1.75rem]"
            strokeWidth={0.5}
            aria-hidden="true"
          />
        </button>
        <button
          className="next-btn hover:text-pri-purple-200 text-pri-purple-300 active:text-pri-purple-200 absolute right-0 top-1/2 z-[5] -translate-y-1/2 cursor-pointer bg-white shadow-[-2px_0_4px_1px_rgba(125,110,85,0.2)]"
          aria-label="下一張圖"
        >
          <BsChevronCompactRight
            className="my-3 text-[1.75rem]"
            strokeWidth={0.5}
            aria-hidden="true"
          />
        </button>
      </Swiper>
      <Swiper
        onSwiper={(swiper) => setActiveThumb(swiper)}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        modules={[Navigation, Thumbs]}
        className="product-detail-slider-thumbs mt-5"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={`${id}_image${index + 1}`}
            className="group relative"
          >
            <div className="absolute inset-0 bg-white/60 opacity-100 group-[.swiper-slide-thumb-active]:opacity-0"></div>
            <img
              src={image}
              className="px-5"
              alt={`${title}縮圖${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductDetailSlider;

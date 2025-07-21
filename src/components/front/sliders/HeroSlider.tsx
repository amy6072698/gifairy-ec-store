// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

// import { useEffect, useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { PillButton } from "@/components/common/Buttons";

// data
const heroSlidesData = [
  {
    image:
      "https://github.com/amy6072698/my-images/blob/main/gifairy-ec-store/front/home/hero-slider/slide1.png?raw=true",
    link: "/about",
    subtitle: "讓你的每份禮物",
    subtitleClass:
      "text-sec-pink-100 text-[1rem]/[1.25] min-[576px]:text-[1.5rem]/[1.5] lg:text-[2.25rem]/[1.5]",
    title: "乘著幸福魔法飛向遠方",
    titleClass:
      "text-white text-[1.125rem]/[1.25] mb-1 min-[576px]:text-[2rem]/[1.5] lg:text-[3rem]/[1.5] min-[576px]:mb-2",
    btnText: "挑選魔法禮物",
    btnClass:
      "bg-pri-purple-300 text-[0.8rem] px-4 h-[24px] md:px-8 min-[576px]:h-[34px] md:h-[38px] min-[576px]:text-[1rem] md:text-[1.25rem] hover:bg-pri-purple-400 active:bg-pri-purple-300",
    contentClass: "py-[4%] pr-[45%] pl-[4%] justify-center",
    textBoxClass: "flex flex-col items-start font-medium",
  },
  {
    image:
      "https://github.com/amy6072698/my-images/blob/main/gifairy-ec-store/front/home/hero-slider/slide2.png?raw=true",
    link: "/about",
    subtitle: "讓你的每份禮物",
    subtitleClass:
      "text-sec-pink-100 text-[1rem]/[1.25] min-[576px]:text-[1.5rem]/[1.5] lg:text-[2.25rem]/[1.5]",
    title: "乘著幸福魔法飛向遠方",
    titleClass:
      "text-white text-[1.125rem]/[1.25] mb-1 min-[576px]:text-[2rem]/[1.5] lg:text-[3rem]/[1.5] min-[576px]:mb-2",
    btnText: "讓魔鏡挑禮物",
    btnClass:
      "bg-pri-purple-300 text-[0.8rem] px-4 h-[24px] md:px-8 min-[576px]:h-[34px] md:h-[38px] min-[576px]:text-[1rem] md:text-[1.25rem] hover:bg-pri-purple-400 active:bg-pri-purple-300",
    contentClass: "py-[4%] pr-[4%] pl-[45%] justify-center",
    textBoxClass: "flex flex-col items-start font-medium",
  },
  {
    image:
      "https://github.com/amy6072698/my-images/blob/main/gifairy-ec-store/front/home/hero-slider/slide3.png?raw=true",
    link: "/about",
    subtitle: "讓你的每份禮物",
    subtitleClass:
      "text-sec-pink-100 text-[1rem]/[1.25] min-[576px]:text-[1.5rem]/[1.5] lg:text-[2.25rem]/[1.5]",
    title: "乘著幸福魔法飛向遠方",
    titleClass:
      "text-white text-[1.125rem]/[1.25] mb-1 min-[576px]:text-[2rem]/[1.5] lg:text-[3rem]/[1.5] min-[576px]:mb-2",
    btnText: "挑選魔法禮物",
    btnClass:
      "bg-pri-purple-300 text-[0.8rem] px-4 h-[24px] md:px-8 min-[576px]:h-[34px] md:h-[38px] min-[576px]:text-[1rem] md:text-[1.25rem] hover:bg-pri-purple-400 active:bg-pri-purple-300",
    contentClass: "py-[4%] pr-[45%] pl-[4%] justify-center",
    textBoxClass: "flex flex-col items-start font-medium",
  },
  {
    image:
      "https://github.com/amy6072698/my-images/blob/main/gifairy-ec-store/front/home/hero-slider/slide4.png?raw=true",
    link: "/about",
    subtitle: "讓你的每份禮物",
    subtitleClass:
      "text-sec-pink-100 text-[1rem]/[1.25] min-[576px]:text-[1.5rem]/[1.5] lg:text-[2.25rem]/[1.5]",
    title: "乘著幸福魔法飛向遠方",
    titleClass:
      "text-white text-[1.125rem]/[1.25] mb-1 min-[576px]:text-[2rem]/[1.5] lg:text-[3rem]/[1.5] min-[576px]:mb-2",
    btnText: "挑選魔法禮物",
    btnClass:
      "bg-pri-purple-300 text-[0.8rem] px-4 h-[24px] md:px-8 min-[576px]:h-[34px] md:h-[38px] min-[576px]:text-[1rem] md:text-[1.25rem] hover:bg-pri-purple-400 active:bg-pri-purple-300",
    contentClass: "py-[4%] pr-[4%] pl-[4%] justify-start",
    textBoxClass: "flex flex-col items-center font-medium",
  },
  {
    image:
      "https://github.com/amy6072698/my-images/blob/main/gifairy-ec-store/front/home/hero-slider/slide1.png?raw=true",
    link: "/about",
    subtitle: "讓你的每份禮物",
    subtitleClass:
      "text-sec-pink-100 text-[1rem]/[1.25] min-[576px]:text-[1.5rem]/[1.5] lg:text-[2.25rem]/[1.5]",
    title: "乘著幸福魔法飛向遠方",
    titleClass:
      "text-white text-[1.125rem]/[1.25] mb-1 min-[576px]:text-[2rem]/[1.5] lg:text-[3rem]/[1.5] min-[576px]:mb-2",
    btnText: "挑選魔法禮物",
    btnClass:
      "bg-pri-purple-300 text-[0.8rem] px-4 h-[24px] md:px-8 min-[576px]:h-[34px] md:h-[38px] min-[576px]:text-[1rem] md:text-[1.25rem] hover:bg-pri-purple-400 active:bg-pri-purple-300",
    contentClass: "py-[4%] pr-[45%] pl-[4%] justify-center",
    textBoxClass: "flex flex-col items-start font-medium",
  },
  {
    image:
      "https://github.com/amy6072698/my-images/blob/main/gifairy-ec-store/front/home/hero-slider/slide2.png?raw=true",
    link: "/about",
    subtitle: "讓你的每份禮物",
    subtitleClass:
      "text-sec-pink-100 text-[1rem]/[1.25] min-[576px]:text-[1.5rem]/[1.5] lg:text-[2.25rem]/[1.5]",
    title: "乘著幸福魔法飛向遠方",
    titleClass:
      "text-white text-[1.125rem]/[1.25] mb-1 min-[576px]:text-[2rem]/[1.5] lg:text-[3rem]/[1.5] min-[576px]:mb-2",
    btnText: "挑選魔法禮物",
    btnClass:
      "bg-pri-purple-300 text-[0.8rem] px-4 h-[24px] md:px-8 min-[576px]:h-[34px] md:h-[38px] min-[576px]:text-[1rem] md:text-[1.25rem] hover:bg-pri-purple-400 active:bg-pri-purple-300",
    contentClass: "py-[4%] pr-[4%] pl-[45%] justify-center",
    textBoxClass: "flex flex-col items-start font-medium",
  },
  {
    image:
      "https://github.com/amy6072698/my-images/blob/main/gifairy-ec-store/front/home/hero-slider/slide3.png?raw=true",
    link: "/about",
    subtitle: "讓你的每份禮物",
    subtitleClass:
      "text-sec-pink-100 text-[1rem]/[1.25] min-[576px]:text-[1.5rem]/[1.5] lg:text-[2.25rem]/[1.5]",
    title: "乘著幸福魔法飛向遠方",
    titleClass:
      "text-white text-[1.125rem]/[1.25] mb-1 min-[576px]:text-[2rem]/[1.5] lg:text-[3rem]/[1.5] min-[576px]:mb-2",
    btnText: "挑選魔法禮物",
    btnClass:
      "bg-pri-purple-300 text-[0.8rem] px-4 h-[24px] md:px-8 min-[576px]:h-[34px] md:h-[38px] min-[576px]:text-[1rem] md:text-[1.25rem] hover:bg-pri-purple-400 active:bg-pri-purple-300",
    contentClass: "py-[4%] pr-[45%] pl-[4%] justify-center",
    textBoxClass: "flex flex-col items-start font-medium",
  },
  {
    image:
      "https://github.com/amy6072698/my-images/blob/main/gifairy-ec-store/front/home/hero-slider/slide4.png?raw=true",
    link: "/about",
    subtitle: "讓你的每份禮物",
    subtitleClass:
      "text-sec-pink-100 text-[1rem]/[1.25] min-[576px]:text-[1.5rem]/[1.5] lg:text-[2.25rem]/[1.5]",
    title: "乘著幸福魔法飛向遠方",
    titleClass:
      "text-white text-[1.125rem]/[1.25] mb-1 min-[576px]:text-[2rem]/[1.5] lg:text-[3rem]/[1.5] min-[576px]:mb-2",
    btnText: "挑選魔法禮物",
    btnClass:
      "bg-pri-purple-300 text-[0.8rem] px-4 h-[24px] md:px-8 min-[576px]:h-[34px] md:h-[38px] min-[576px]:text-[1rem] md:text-[1.25rem] hover:bg-pri-purple-400 active:bg-pri-purple-300",
    contentClass: "py-[4%] pr-[4%] pl-[4%] justify-start",
    textBoxClass: "flex flex-col items-center font-medium",
  },
];

const HeroCarousel = () => {
  return (
    <section className="hero-slider font-lato bg-pri-purple-100 w-full overflow-hidden py-5">
      <div className="slider-container">
        <Swiper
          centeredSlides={true}
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          keyboard={{
            enabled: true,
          }}
          slideToClickedSlide={true}
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
          }}
          navigation={{
            enabled: false,
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.1,
              spaceBetween: 5,
              navigation: {
                enabled: false,
              },
            },
            767: {
              slidesPerView: 1.2,
              spaceBetween: 10,
              navigation: {
                enabled: false,
              },
            },
            1024: {
              slidesPerView: 1.25,
              spaceBetween: 20,
              navigation: {
                enabled: true,
              },
            },
          }}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false
          // }}
        >
          {heroSlidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.image} alt={slide.title} />
              <div className={`content ${slide.contentClass}`}>
                <div className={`text-box ${slide.textBoxClass}`}>
                  <h2 className={slide.subtitleClass}>{slide.subtitle}</h2>
                  <h2 className={slide.titleClass}>{slide.title}</h2>
                  <PillButton
                    isAsChild={true}
                    className={`action-btn ${slide.btnClass}`}
                  >
                    <Link to={slide.link}>{slide.btnText}</Link>
                  </PillButton>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <button className="prev-btn">
            <BsChevronCompactLeft />
          </button>
          <button className="next-btn">
            <BsChevronCompactRight />
          </button>
        </Swiper>
      </div>
    </section>
  );
};

export default HeroCarousel;

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { PillButton } from "@/components/common/Buttons";

// data
const heroSlidesData = [
  {
    id: 1,
    image:
      "https://github.com/amy6072698/my-images/blob/main/gifairy-ec-store/front/home/hero-slider/slide1.png?raw=true",
    link: "/products",
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
    id: 2,
    image:
      "https://github.com/amy6072698/my-images/blob/main/gifairy-ec-store/front/home/hero-slider/slide2.png?raw=true",
    link: "/products",
    subtitle: "送禮沒靈感？",
    subtitleClass:
      "text-sec-yellow-400 text-[1rem]/[1.25] min-[576px]:text-[1.5rem]/[1.5] lg:text-[2.25rem]/[1.5]",
    title: "魔鏡幫你精選送禮主題",
    titleClass:
      "text-white text-[1.125rem]/[1.25] mb-1 min-[576px]:text-[2rem]/[1.5] lg:text-[3rem]/[1.5] min-[576px]:mb-2",
    btnText: "去看魔鏡精選",
    btnClass:
      "bg-sec-yellow-600 text-[0.8rem] px-4 h-[24px] md:px-8 min-[576px]:h-[34px] md:h-[38px] min-[576px]:text-[1rem] md:text-[1.25rem] hover:bg-sec-yellow-700 active:bg-sec-yellow-700",
    contentClass: "py-[4%] pr-[4%] pl-[45%] justify-center",
    textBoxClass: "flex flex-col items-start font-medium",
  },
  {
    id: 3,
    image:
      "https://github.com/amy6072698/my-images/blob/main/gifairy-ec-store/front/home/hero-slider/slide3.png?raw=true",
    link: "/products",
    subtitle: "這個情人節",
    subtitleClass:
      "text-red-300 text-[1rem]/[1.25] min-[576px]:text-[1.5rem]/[1.5] lg:text-[2.25rem]/[1.5]",
    title: "表白愛意可以很不一樣",
    titleClass:
      "text-white text-[1.125rem]/[1.25] mb-1 min-[576px]:text-[2rem]/[1.5] lg:text-[3rem]/[1.5] min-[576px]:mb-2",
    btnText: "看情人節選品",
    btnClass:
      "bg-red-800 text-[0.8rem] px-4 h-[24px] md:px-8 min-[576px]:h-[34px] md:h-[38px] min-[576px]:text-[1rem] md:text-[1.25rem] hover:bg-red-900 active:bg-red-900",
    contentClass: "py-[4%] pr-[45%] pl-[4%] justify-center",
    textBoxClass: "flex flex-col items-start font-medium",
  },
  {
    id: 4,
    image:
      "https://github.com/amy6072698/my-images/blob/main/gifairy-ec-store/front/home/hero-slider/slide4.png?raw=true",
    link: "/products",
    subtitle: "聖誕節很煩惱？",
    subtitleClass:
      "text-emerald-300 text-[1rem]/[1.25] min-[576px]:text-[1.5rem]/[1.5] lg:text-[2.25rem]/[1.5]",
    title: "交換禮物新選擇就在這",
    titleClass:
      "text-white text-[1.125rem]/[1.25] mb-1 min-[576px]:text-[2rem]/[1.5] lg:text-[3rem]/[1.5] min-[576px]:mb-2",
    btnText: "快去挑選禮物",
    btnClass:
      "bg-emerald-700 text-[0.8rem] px-4 h-[24px] md:px-8 min-[576px]:h-[34px] md:h-[38px] min-[576px]:text-[1rem] md:text-[1.25rem] hover:bg-red-700 active:bg-red-700",
    contentClass: "py-[4%] pr-[4%] pl-[4%] justify-start",
    textBoxClass: "flex flex-col items-center font-medium",
  },
  {
    id: 5,
    image:
      "https://github.com/amy6072698/my-images/blob/main/gifairy-ec-store/front/home/hero-slider/slide1.png?raw=true",
    link: "/products",
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
    id: 6,
    image:
      "https://github.com/amy6072698/my-images/blob/main/gifairy-ec-store/front/home/hero-slider/slide2.png?raw=true",
    link: "/products",
    subtitle: "送禮沒靈感？",
    subtitleClass:
      "text-sec-yellow-400 text-[1rem]/[1.25] min-[576px]:text-[1.5rem]/[1.5] lg:text-[2.25rem]/[1.5]",
    title: "魔鏡幫你精選送禮主題",
    titleClass:
      "text-white text-[1.125rem]/[1.25] mb-1 min-[576px]:text-[2rem]/[1.5] lg:text-[3rem]/[1.5] min-[576px]:mb-2",
    btnText: "去看魔鏡精選",
    btnClass:
      "bg-sec-yellow-600 text-[0.8rem] px-4 h-[24px] md:px-8 min-[576px]:h-[34px] md:h-[38px] min-[576px]:text-[1rem] md:text-[1.25rem] hover:bg-sec-yellow-700 active:bg-sec-yellow-700",
    contentClass: "py-[4%] pr-[4%] pl-[45%] justify-center",
    textBoxClass: "flex flex-col items-start font-medium",
  },
  {
    id: 7,
    image:
      "https://github.com/amy6072698/my-images/blob/main/gifairy-ec-store/front/home/hero-slider/slide3.png?raw=true",
    link: "/products",
    subtitle: "這個情人節",
    subtitleClass:
      "text-red-300 text-[1rem]/[1.25] min-[576px]:text-[1.5rem]/[1.5] lg:text-[2.25rem]/[1.5]",
    title: "表白愛意可以很不一樣",
    titleClass:
      "text-white text-[1.125rem]/[1.25] mb-1 min-[576px]:text-[2rem]/[1.5] lg:text-[3rem]/[1.5] min-[576px]:mb-2",
    btnText: "看情人節選品",
    btnClass:
      "bg-red-800 text-[0.8rem] px-4 h-[24px] md:px-8 min-[576px]:h-[34px] md:h-[38px] min-[576px]:text-[1rem] md:text-[1.25rem] hover:bg-red-900 active:bg-red-900",
    contentClass: "py-[4%] pr-[45%] pl-[4%] justify-center",
    textBoxClass: "flex flex-col items-start font-medium",
  },
  {
    id: 8,
    image:
      "https://github.com/amy6072698/my-images/blob/main/gifairy-ec-store/front/home/hero-slider/slide4.png?raw=true",
    link: "/products",
    subtitle: "聖誕節很煩惱？",
    subtitleClass:
      "text-emerald-300 text-[1rem]/[1.25] min-[576px]:text-[1.5rem]/[1.5] lg:text-[2.25rem]/[1.5]",
    title: "交換禮物新選擇就在這",
    titleClass:
      "text-white text-[1.125rem]/[1.25] mb-1 min-[576px]:text-[2rem]/[1.5] lg:text-[3rem]/[1.5] min-[576px]:mb-2",
    btnText: "快去挑選禮物",
    btnClass:
      "bg-emerald-700 text-[0.8rem] px-4 h-[24px] md:px-8 min-[576px]:h-[34px] md:h-[38px] min-[576px]:text-[1rem] md:text-[1.25rem] hover:bg-red-700 active:bg-red-700",
    contentClass: "py-[4%] pr-[4%] pl-[4%] justify-start",
    textBoxClass: "flex flex-col items-center font-medium",
  },
];

const HeroCarousel = () => {
  return (
    <section className="hero-slider bg-pri-purple-100 w-full overflow-hidden py-5">
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
        >
          {heroSlidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
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

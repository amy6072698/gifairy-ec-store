import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const themeSlidesData = [
  {
    image: "/src/assets/themeSlides/slide1.jpg",
    title: "情人節告白精選",
    subtitle: "告白也需要勇氣",
    description: "情人節你需要帶來勇氣的魔法禮物，快去挑選讓你勇敢告白不洩氣",
  },
  {
    image: "/src/assets/themeSlides/slide2.jpg",
    title: "聖誕交換禮物精選",
    subtitle: "交換禮物沒靈感？",
    description:
      "快來看看我們精心挑選的質感選物，聖誕節讓你不只送出心意，更顯新意",
  },
  {
    image: "/src/assets/themeSlides/slide3.jpg",
    title: "商務職場精選",
    subtitle: "每天工作好辛苦",
    description:
      "精選美味零食、送禮禮盒，讓你職場人際不煩惱，沒什麼是一杯咖啡處理不了的",
  },
  {
    image: "/src/assets/themeSlides/slide4.jpg",
    title: "畢業季精選",
    subtitle: "畢業禮物怎麼選？",
    description: "挑選一份給對方的驚喜魔法，在畢業的季節送出你滿滿的祝福與感謝",
  },
  {
    image: "/src/assets/themeSlides/slide5.jpg",
    title: "自我療癒精選",
    subtitle: "別忘了愛自己",
    description:
      "生活壓力好巨大，精選療癒香氛、居家用品，讓你在家就能妝點好心情",
  },
  {
    image: "/src/assets/themeSlides/slide6.jpg",
    title: "文青精選",
    subtitle: "點燃文青魂",
    description: "送給文青的你我他，質感文具一定不能少，快去看看挑選合適商品",
  },
];

const ThemeSlider = () => {
  return (
    <section className="theme-slider p-10">
      <div className="top-title">
        <h2>魔鏡精選主題</h2>
      </div>
      <div className="slider-container">
        <Swiper
          modules={[EffectCoverflow, Pagination]}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={200}
          grabCursor={true}
          initialSlide={1}
          pagination={{
            clickable: true,
          }}
        >
          {themeSlidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div>
                <h2 className="title">{slide.title}</h2>
                <img src={slide.image} alt={slide.title} />
                <div className="text-box">
                  <h3>{slide.subtitle}</h3>
                  <p>{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ThemeSlider;

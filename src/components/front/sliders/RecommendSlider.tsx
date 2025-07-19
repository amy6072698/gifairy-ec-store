import { Pagination, EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { useRef, useState } from "react";

const recommendSlidesData = [
  {
    image: "/src/assets/recommendSlides/slide1.png",
    title: "選物特別有溫度",
  },
  {
    image: "/src/assets/recommendSlides/slide2.png",
    title: "客製花束配色",
  },
  {
    image: "/src/assets/recommendSlides/slide3.png",
    title: "包裝用心又省心",
  },
  {
    image: "/src/assets/recommendSlides/slide4.png",
    title: "情人節選禮救星",
  },
  {
    image: "/src/assets/recommendSlides/slide5.png",
    title: "送禮不怕沒靈感",
  },
  {
    image: "/src/assets/recommendSlides/slide6.png",
    title: "網購像逛美術館",
  },
  {
    image: "/src/assets/recommendSlides/slide7.png",
    title: "美食禮盒好吃又好看",
  },
];

const reviewsData = [
  {
    user: "sunny_day",
    userImage: "/src/assets/recommendSlides/user1.png",
    date: "2022-07-05",
    title: "選物特別，居然有蛋糕 DIY 組！",
    content:
      "看到蛋糕 DIY 組合，馬上下單給奶奶的 60 大壽用！家人一起做蛋糕，過程超有趣，奶奶也很開心，比起買現成的，一起製作的回憶更難得，平台選品好有創意！",
  },
  {
    user: "bridalbliss88",
    userImage: "/src/assets/recommendSlides/user2.png",
    date: "2023-05-12",
    title: "婚禮花束竟然能客製配色！",
    content:
      "籌備婚禮時意外發現這個網站，發現竟然有可以客製配色的婚禮花束！聯繫客服還能提供我花束的配色建議，成品超美～下單寄到會場超省事，新娘子零壓力！",
  },
  {
    user: "xmascat",
    userImage: "/src/assets/recommendSlides/user3.png",
    date: "2024-12-20",
    title: "聖誕禮物包裝可愛到不行！",
    content:
      "聖誕節朋友辦交換禮物，沒想到在網站下單挑禮物還能幫我包裝！收到的朋友還說「包裝超可愛～禮物上還掛了拐杖糖！」以後送禮我都會來這裡！",
  },
  {
    user: "tomatoguy",
    userImage: "/src/assets/recommendSlides/user4.png",
    date: "2025-03-14",
    title: "白色情人節太需要這個網站",
    content:
      "超不擅長送禮，是同事推這個網站說可以選條件挑禮物！結果還真有用，女友拿到項鍊還說：「怎麼想到挑這種風格？」我不敢說是靠網站幫忙 XDD 超救急！",
  },
  {
    user: "justforu_777",
    userImage: "/src/assets/recommendSlides/user5.png",
    date: "2023-06-20",
    title: "畢業禮物找這裡就對了！",
    content:
      "找超久不知道送什麼畢業禮物給學妹，這網站立刻解決我的煩惱！用分類找禮物超方便，看了超多靈感～最後選了有祝福文的飾品，學妹收到感動到哭Q_Q",
  },
  {
    user: "artlover_jane",
    userImage: "/src/assets/recommendSlides/user6.png",
    date: "2025-02-22",
    title: "美術館感禮物太有質感了",
    content:
      "想找不那麼普通的禮物，點進網站才知道這裡的選品很有sense，像在選藝廊小物。特別設計的陶杯、乾燥花擺飾都超美！送給文青朋友一定會中！",
  },
  {
    user: "foodie_annie",
    userImage: "/src/assets/recommendSlides/user7.png",
    date: "2024-04-10",
    title: "餅乾禮盒也有設計感？驚喜！",
    content:
      "想找個小禮物，發現有賣造型餅乾小禮盒，包裝設計超有質感！重點是口味也很用心，是有層次的茶香和花香，朋友收到都驚呼這不是一般餅乾禮盒欸～",
  },
];

const RecommendSlider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<any>(null);

  return (
    <section className="recommend-slider bg-sec-yellow-300 py-10">
      <div className="mx-auto max-w-[1140px] px-3">
        <div className="top-title">
          <h2 className="text-pri-purple-400 min-[62rem]:text-[2.375rem] min-[62rem]:mb-8 mb-4 text-center text-[1.75rem] sm:text-[2rem]">
            來看看收禮回饋
          </h2>
        </div>
        <div className="content min-[62rem]:flex-row bg-pri-purple-300 min-[62rem]:gap-6 min-[62rem]:px-5 min-[62rem]:pb-0 relative mx-4 flex flex-col px-0 pb-4">
          {/* Swiper slider */}
          <div className="slider-container min-[62rem]:w-5/12 min-[62rem]:py-6 w-full px-3 py-4">
            <Swiper
              className="min-[33.75rem]:max-w-[20rem] max-w-[10rem]"
              modules={[Pagination, EffectCards]}
              effect={"cards"}
              grabCursor={true}
              slidesPerView={1}
              slidesPerGroup={1}
              pagination={{
                clickable: true,
              }}
              loop={true}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex);
              }}
            >
              {recommendSlidesData.map((slide, index) => (
                <SwiperSlide
                  key={index}
                  className="relative overflow-hidden rounded-2xl shadow-[0_2px_20px_2px_rgba(0,0,0,0.1)]"
                >
                  <img
                    className="block h-full w-full object-cover"
                    src={slide.image}
                    alt={slide.title}
                  />
                  <div className="bg-linear-[180deg,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.6)] absolute inset-0 flex items-end justify-center">
                    <h2 className="text-sec-yellow-300 min-[62rem]:text-[1.25rem] min-[33.75rem]:text-[1.25rem] min-[33.75rem]:mb-6 mb-2 text-end text-[0.9rem]">
                      {slide.title}
                    </h2>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Review */}
          <div className="review min-[62rem]:w-7/12 bg-sec-yellow-200 min-[62rem]:relative static ml-0 w-full">
            {/* Navigation */}
            <div className="min-[62rem]:inset-0 min-[62rem]:z-[5] min-[62rem]:top-0 absolute top-[10rem] z-[0] hidden h-full w-full sm:block">
              <div className="min-[62rem]:justify-between min-[62rem]:gap-[38%] min-[62rem]:items-center flex h-full w-full items-start justify-evenly gap-[55%]">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="hover:text-sec-yellow-700 text-sec-yellow-600 bg-sec-yellow-200 active:bg-sec-yellow-400 cursor-pointer shadow-[1px_0_5px_1px_rgba(125,110,85,0.3)] hover:shadow-[1px_0_5px_1px_rgba(125,110,85,0.5)]"
                >
                  <BsChevronCompactLeft
                    className="my-3 text-[1.75rem]"
                    strokeWidth={0.3}
                  />
                </button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="hover:text-sec-yellow-700 text-sec-yellow-600 bg-sec-yellow-200 active:bg-sec-yellow-400 cursor-pointer shadow-[-1px_0_5px_1px_rgba(125,110,85,0.3)] hover:shadow-[-1px_0_5px_1px_rgba(125,110,85,0.5)]"
                >
                  <BsChevronCompactRight
                    className="my-3 text-[1.75rem]"
                    strokeWidth={0.3}
                  />
                </button>
              </div>
            </div>

            {/* Text */}
            <div>
              {reviewsData.map((review, index) => (
                <div
                  key={index}
                  className={`min-[62rem]:absolute min-[62rem]:px-12 min-[62rem]:py-10 min-[62rem]:items-start static inset-0 flex flex-col items-center justify-between px-4 py-4 ${index === activeIndex ? "min-[62rem]:opacity-100" : "min-[62rem]:opacity-0 hidden"}`}
                >
                  <div className="min-[62rem]:text-start text-center">
                    <h2 className="text-pri-purple-300 min-[62rem]:text-[1.25rem] mb-1 text-[1rem] sm:text-[1.125rem]">
                      {review.title}
                    </h2>
                    <div className="text-sec-yellow-500 min-[62rem]:justify-start mb-2 flex items-center justify-center gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar key={index} />
                      ))}
                      <span>5.0</span>
                    </div>
                    <p className="min-[62rem]:text-[1rem] min-[62rem]:px-0 mx-1 mb-6 text-start text-[0.9rem] text-neutral-600 sm:px-6 md:px-12">
                      {review.content}
                    </p>
                  </div>

                  <div className="min-[62rem]:flex-row min-[62rem]:justify-end min-[62rem]:ml-auto ml-0 flex flex-col-reverse items-center">
                    <div className="min-[62rem]:mr-2 min-[62rem]:text-end mr-0 text-center">
                      <p className="text-pri-purple-300 min=[62rem]:text-[0.9rem] text-[0.875rem]">
                        {review.user}
                      </p>
                      <p className="min=[62rem]:text-[0.85rem] text-[0.8rem] text-neutral-600">
                        {review.date}
                      </p>
                    </div>
                    <img
                      className="w-[3rem] rounded-full"
                      src={review.userImage}
                      alt={review.title}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendSlider;

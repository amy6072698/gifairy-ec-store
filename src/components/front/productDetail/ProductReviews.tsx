import RatingStars from "@/components/common/RatingStars";
import ProductDetailTitle from "./ProductDetailTitle";
import type { Product } from "@/types/product";
import Pagination from "@/components/common/Pagination";
import { useState } from "react";

interface ProductReviewsProps {
  product: Product;
}

const ProductReviews = ({ product }: ProductReviewsProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Data
  const { meta } = product;
  const ProductReviewsData = [
    {
      id: 1,
      userName: "sunny_day",
      userImage:
        "https://github.com/amy6072698/my-images/blob/main/gifairy-ec-store/front/home/recommend_slider/user1.png?raw=true",
      rating: 5,
      title: "包裝超精美",
      content:
        "收到禮物的時候覺得很驚喜，包裝用心，朋友也超喜歡！真的太喜歡這次的購物體驗了！商品本身質感很好，摸起來完全不像一般網購隨便的東西，還有一股特別的用心感。最驚喜的是包裝，打開時就像拆禮物一樣，每個細節都處理得很精緻，連緞帶和小卡片都讓人覺得溫暖。朋友收到後整個超開心，說這份禮物很有儀式感，也很符合他的喜好。覺得平台的選品很用心，下次一定會再回購！",
      createdAt: "2022-07-05",
    },
    {
      id: 2,
      userName: "bridalbliss88",
      userImage:
        "https://github.com/amy6072698/my-images/blob/main/gifairy-ec-store/front/home/recommend_slider/user2.png?raw=true",
      rating: 5,
      title: "快速到貨，值得推薦！",
      content:
        "真的要誇一下物流速度！沒想到才下單沒幾天就收到了，比我預期還快很多。包裝完整又細心，完全沒有碰撞或壓壞的痕跡，讓人覺得很放心。打開後看到實品，質感比照片還好，看得出來不是隨便的商品，送人也很體面。這次是為了節日準備的小禮物，結果提早到貨讓我完全不用擔心時間，非常貼心。這樣的購物體驗讓我之後一定會再來回購！",
      createdAt: "2023-05-12",
    },
    {
      id: 3,
      userName: "xmascat",
      userImage:
        "https://github.com/amy6072698/my-images/blob/main/gifairy-ec-store/front/home/recommend_slider/user3.png?raw=true",
      rating: 5,
      title: "送禮很有面子",
      content:
        "這次是買來送同事的生日禮物，一開始還很擔心挑不到合適的，但打開平台後真的眼睛一亮，每件商品都很有特色。最後選了一個特別的小禮盒，收到時發現比想像中更有質感，完全不像一般隨便買的東西。同事打開的時候立刻笑出來，大家也說選得很好，看起來很高級。雖然運送時間比想的多等了一天，但整體還是非常滿意，值得再來選購",
      createdAt: "2023-12-20",
    },
    {
      id: 4,
      userName: "tomatoguy",
      userImage:
        "https://github.com/amy6072698/my-images/blob/main/gifairy-ec-store/front/home/recommend_slider/user4.png?raw=true",
      rating: 5,
      title: "質感滿分",
      content:
        "商品收到的時候真的有被驚艷到！不只外觀漂亮，拿在手上也很有份量，完全超乎我的期待。很多時候在網路上購物，難免會擔心照片和實品落差，但這次完全沒有這個問題，反而是實品比照片更好看。細節處理很細緻，材質摸起來也很舒服。最讓我驚喜的是，連外包裝也很有質感，完全可以直接送人不用再另外包裝。真的很滿意，已經推薦給朋友了！",
      createdAt: "2024-03-14",
    },
    {
      id: 5,
      userName: "justforu_777",
      userImage:
        "https://github.com/amy6072698/my-images/blob/main/gifairy-ec-store/front/home/recommend_slider/user5.png?raw=true",
      rating: 5,
      title: "朋友超愛",
      content:
        "這次是幫朋友準備生日禮物，一開始還擔心會不會選錯，但結果完全超乎我的預期！打開包裝的時候自己就覺得超級漂亮，細節做得很精緻，完全可以感受到平台在選品上的用心。帶去聚會送給他時，說這個禮物超符合他的風格，還馬上拿起來拍照發限時動態。整個過程讓我覺得很有面子，也很有成就感，真的很推薦！",
      createdAt: "2024-06-20",
    },
    {
      id: 6,
      userName: "artlover_jane",
      userImage:
        "https://github.com/amy6072698/my-images/blob/main/gifairy-ec-store/front/home/recommend_slider/user6.png?raw=true",
      rating: 5,
      title: "值得回購",
      content:
        "不得不說，這個平台真的讓我一試成主顧！第一次抱著好奇心購買，沒想到從下單到收貨的每個細節都讓人感受到用心。商品質感超乎想像，連小細節都很講究，完全不像一般電商隨便選的貨品。朋友收到後也非常開心，說這是他收到過最有驚喜感的禮物。這次體驗讓我覺得選對了地方，以後要送禮我一定會再來逛，真的值得推薦給大家！",
      createdAt: "2025-02-22",
    },
  ];

  // Pagination
  const REVIEWS_PER_PAGE = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(ProductReviewsData.length / REVIEWS_PER_PAGE);

  const startIndex = (currentPage - 1) * REVIEWS_PER_PAGE;

  const currentReviews = ProductReviewsData.slice(
    startIndex,
    startIndex + REVIEWS_PER_PAGE,
  );

  return (
    <section className="mb-15">
      <ProductDetailTitle title="商品評價" className="flex justify-center" />

      <div className="mb-10 text-center">
        <p className="text-pri-purple-300 mb-1 text-[1rem] font-medium sm:text-[1.125rem]">
          {meta.reviewCount} 則評價
        </p>
        <RatingStars
          rating={meta.rating}
          className="mb-2 justify-center gap-1 text-[1.5rem]"
        />
      </div>
      {/* review card */}
      <ul className="mx-auto w-8/12">
        {currentReviews.map((review) => {
          const isExpanded = expandedId === review.id;
          return (
            <li
              className="border-sec-yellow-300 bg-sec-yellow-100 gap-15 mb-4 flex rounded-[2px] border-[1px] px-8 py-6"
              key={review.id}
            >
              <div className="flex w-1/4 items-center">
                <img
                  className="w-[3rem] rounded-full"
                  src={review.userImage}
                  alt={review.userName}
                />
                <div className="ml-2">
                  <p className="text-pri-purple-300 min=[62rem]:text-[0.9rem] text-[0.875rem]">
                    {review.userName}
                  </p>
                  <p className="min=[62rem]:text-[0.85rem] text-[0.8rem] text-neutral-600">
                    {review.createdAt}
                  </p>
                </div>
              </div>
              <div className="w-3/4 text-start">
                <RatingStars rating={meta.rating} className="mb-2 gap-1" />
                <h2 className="text-pri-purple-300 mb-1 text-[1rem] sm:text-[1.125rem]">
                  {review.title}
                </h2>
                <p
                  className={`mb-2 text-[0.9rem] text-neutral-600 ${isExpanded ? "" : "line-clamp-3"}`}
                >
                  {review.content}
                </p>

                <button
                  onClick={() => handleExpanded(review.id)}
                  className="text-pri-purple-200 ml-auto mr-3 flex text-[0.9rem] hover:underline"
                >
                  {isExpanded ? "收起" : "顯示更多"}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalPages={totalPages}
        className="mt-10"
      />
    </section>
  );
};

export default ProductReviews;

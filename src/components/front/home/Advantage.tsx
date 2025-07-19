import clsx from "clsx";

const Advantage = () => {
  const mainImageClasses = clsx(
    // container
    "relative mx-auto mt-[-170px] max-w-[440px] xl:static",

    // before
    "before:absolute before:left-[3%] before:top-0 before:z-[1]",
    "before:mr-3 before:block before:h-[98%] before:w-full before:content-['']",
    "before:border-3 before:border-pri-purple-300 before:rounded-t-full",
    "xl:before:-top-[20%] xl:before:h-[92.5%]",

    // after
    "after:absolute after:-bottom-[8%] after:left-[25%] after:z-[2]",
    "after:block after:h-[50%] after:w-[80%] after:content-['']",
    "after:bg-[url('/src/assets/home/advantage-star-light.svg')]",
    "after:bg-position-[center] after:rotate-[5deg] after:bg-contain after:bg-no-repeat",
    "xl:after:rotate-none xl:after:bottom-[8%] xl:after:h-[60%] xl:after:w-[90%]",
    "min-[82.5rem]:after:left-[32%]",
  );

  return (
    <section className="advantage bg-pri-purple-400 before:h-43 before:bg-sec-yellow-100 before:block before:w-full before:content-['']">
      <div className="mx-auto flex max-w-[1140px] flex-col justify-center gap-x-3 py-10 xl:flex-row-reverse">
        {/* main image */}
        <div className="w-fll p-10 md:mb-10 xl:relative xl:w-5/12">
          <div className={mainImageClasses}>
            <img
              width="540px"
              className="block rounded-t-full xl:absolute xl:-top-[20%] xl:left-0"
              src="/src/assets/home/advantage-main.png"
              alt="送禮就選 Gifairy"
            />
          </div>
        </div>
        {/* content */}
        <div className="content w-fll p-3 xl:mr-10 xl:w-7/12">
          <h2 className="text-sec-yellow-200 mb-4 text-center text-[1.75rem] sm:text-[2rem] md:mb-8 md:text-[2.375rem]">
            送禮就選 Gifairy
          </h2>
          <ul className="flex flex-col gap-y-6">
            <li className="flex flex-col items-center justify-center gap-8 rounded-full sm:flex-row xl:justify-between">
              <img
                className="max-w-[160px] sm:max-w-[200px]"
                src="/src/assets/home/advantage-image1.svg"
                alt="多元主題任你挑選"
              />
              <div className="text-box text-sec-yellow-600 mr-3 text-center sm:text-start xl:mr-10">
                <h3 className="text-sec-yellow-400 mb-1 text-[1.25rem] md:text-[1.5rem]">
                  多元主題任你挑選
                </h3>
                <p className="text-[0.9rem]/[1.3] sm:text-[1rem]/[1.5]">
                  針對場合、對象、風格自由挑選，陪你輕鬆找到合適商品
                </p>
              </div>
            </li>
            <li className="flex flex-col items-center justify-center gap-8 sm:flex-row-reverse xl:justify-between">
              <img
                className="max-w-[160px] sm:max-w-[200px]"
                src="/src/assets/home/advantage-image2.svg"
                alt="質感選品更顯心意"
              />
              <div className="text-box text-sec-yellow-600 ml-3 text-center sm:text-start xl:ml-10">
                <h3 className="text-sec-yellow-400 mb-1 text-[1.25rem] md:text-[1.5rem]">
                  質感選品更顯心意
                </h3>
                <p className="text-[0.9rem]/[1.3] sm:text-[1rem]/[1.5]">
                  嚴選文創、手作、設計師商品，讓你體驗有溫度的質感選物
                </p>
              </div>
            </li>
            <li className="flex flex-col items-center justify-center gap-8 sm:flex-row xl:justify-between">
              <img
                className="max-w-[160px] sm:max-w-[200px]"
                src="/src/assets/home/advantage-image3.svg"
                alt="包裝送禮一站完成"
              />
              <div className="text-box text-sec-yellow-600 mr-3 text-center sm:text-start xl:mr-10">
                <h3 className="text-sec-yellow-400 mb-1 text-[1.25rem] md:text-[1.5rem]">
                  包裝送禮一站完成
                </h3>
                <p className="text-[0.9rem]/[1.3] sm:text-[1rem]/[1.5]">
                  提供禮物包裝服務，送禮更便捷，為你的禮物附上幸福的魔法
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Advantage;

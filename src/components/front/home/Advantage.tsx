const Advantage = () => {
  return (
    <section className="advantage bg-pri-purple-400">
      <div className="mx-auto max-w-[1140px] flex flex-col xl:flex-row-reverse justify-center gap-x-3 py-10">
        {/* image */}
        <div className="xl:relative w-fll xl:w-5/12 md:mb-10 p-10">
          <div className="image relative xl:static max-w-[440px] mt-[-170px] mx-auto">
            <img
              width="540px"
              className="block xl:absolute xl:-top-[20%] xl:left-0 rounded-t-full"
              src="/src/assets/home/advantage-main.png"
              alt=""
            />
          </div>
        </div>
        {/* content */}
        <div className="content p-3 xl:mr-10 w-fll xl:w-7/12">
          <h2 className="text-[1.75rem] sm:text-[2rem] md:text-[2.375rem] text-sec-yellow-200 mb-4 md:mb-8 text-center">
            送禮就選 Gifairy
          </h2>
          <ul className="flex flex-col gap-y-6">
            <li className="flex flex-col sm:flex-row justify-center xl:justify-between items-center gap-8 rounded-full">
              <img
                className="max-w-[160px] sm:max-w-[200px]"
                src="/src/assets/home/advantage-image1.svg"
                alt="多元主題任你挑選"
              />
              <div className="text-box text-sec-yellow-600 xl:mr-10 mr-3 text-center sm:text-start">
                <h3 className="text-[1.25rem] md:text-[1.5rem] text-sec-yellow-400 mb-1">
                  多元主題任你挑選
                </h3>
                <p className="text-[0.9rem]/[1.3] sm:text-[1rem]/[1.5]">
                  針對場合、對象、風格自由挑選，陪你輕鬆找到合適商品
                </p>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row-reverse justify-center xl:justify-between items-center gap-8">
              <img
                className="max-w-[160px] sm:max-w-[200px]"
                src="/src/assets/home/advantage-image2.svg"
                alt="質感選品更顯心意"
              />
              <div className="text-box text-sec-yellow-600 xl:ml-10 ml-3 text-center sm:text-start">
                <h3 className="text-[1.25rem] md:text-[1.5rem] text-sec-yellow-400 mb-1">
                  質感選品更顯心意
                </h3>
                <p className="text-[0.9rem]/[1.3] sm:text-[1rem]/[1.5]">
                  嚴選文創、手作、設計師商品，讓你體驗有溫度的質感選物
                </p>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row justify-center xl:justify-between items-center gap-8">
              <img
                className="max-w-[160px] sm:max-w-[200px]"
                src="/src/assets/home/advantage-image3.svg"
                alt="包裝送禮一站完成"
              />
              <div className="text-box text-sec-yellow-600 xl:mr-10 mr-3 text-center sm:text-start">
                <h3 className="text-[1.25rem] md:text-[1.5rem] text-sec-yellow-400 mb-1">
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

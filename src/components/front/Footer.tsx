import { Link } from "react-router-dom";
import { SiLine, SiYoutube } from "react-icons/si";
import { RiInstagramFill, RiFacebookCircleFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer bg-sec-yellow-100 text-neutral-600">
      <div className="mx-auto flex max-w-[1140px] flex-col px-9 lg:px-4">
        <div className="content flex flex-col-reverse py-10 lg:flex-row">
          <div className="mr-0 flex w-full flex-col-reverse gap-6 md:flex-row-reverse md:justify-end md:gap-20 lg:mr-9 lg:w-8/12 lg:flex-row lg:justify-start lg:gap-0">
            {/* Logo */}
            <div className="-ml-3 md:ml-0 lg:w-1/2">
              <Link to="/">
                <img
                  className="mb-2 h-[60px]"
                  src="https://cdn.jsdelivr.net/gh/amy6072698/my-images@main/gifairy-ec-store/logo/logo.svg"
                  alt="Gifairy logo"
                />
              </Link>
              <p className="text-pri-purple-200 ml-4">讓你的禮物帶著幸福魔法</p>
              <p className="text-pri-purple-200 ml-4">
                Let your gift carry the magic of happiness.
              </p>
            </div>
            {/* Nav Lists */}
            <div className="flex flex-col justify-around gap-6 md:flex-row md:gap-20 lg:w-1/2 lg:justify-around lg:gap-0">
              <div>
                <h3 className="text-pri-purple-300 mb-2 text-[1.125rem]">
                  探索商品
                </h3>
                <ul className="flex flex-col gap-1">
                  <li>配件飾品</li>
                  <li>居家生活</li>
                  <li>風格文具</li>
                  <li>品味美食</li>
                </ul>
              </div>
              <div>
                <h3 className="text-pri-purple-300 mb-2 text-[1.125rem]">
                  幫助 | 關於
                </h3>
                <ul className="flex flex-col gap-1">
                  <li>服務條款</li>
                  <li>隱私權政策</li>
                  <li>退貨政策</li>
                  <li>常見問題</li>
                  <li>關於我們</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Medias */}
          <div className="w-full lg:w-4/12">
            <h3 className="text-pri-purple-300 mb-2 text-[1.125rem]">
              追蹤動態
            </h3>
            <div className="mb-6 flex gap-2">
              <button className="text-sec-yellow-200 bg-pri-purple-400 cursor-pointer rounded-full opacity-85 hover:opacity-100 active:opacity-100">
                <a href="https://www.youtube.com/">
                  <RiInstagramFill size="1.125rem" className="m-2" />
                </a>
              </button>
              <button className="text-sec-yellow-200 bg-pri-purple-400 cursor-pointer rounded-full opacity-85 hover:opacity-100 active:opacity-100">
                <a href="https://www.facebook.com/">
                  <SiYoutube size="1.125rem" className="m-2" />
                </a>
              </button>
              <button className="text-sec-yellow-200 bg-pri-purple-400 cursor-pointer rounded-full opacity-85 hover:opacity-100 active:opacity-100">
                <a href="https://www.facebook.com/">
                  <RiFacebookCircleFill size="1.125rem" className="m-2" />
                </a>
              </button>
              <button className="text-sec-yellow-200 bg-pri-purple-400 cursor-pointer rounded-full opacity-85 hover:opacity-100 active:opacity-100">
                <a href="https://www.line.me/tw/">
                  <SiLine size="1.125rem" className="m-2" />
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright flex flex-col justify-between border-t-[1px] border-neutral-300 px-2 py-4 text-[0.8rem] md:flex-row md:text-[0.9rem]">
          <p>僅供個人專案作品不做商業用途使用</p>
          <p>Copyright © 2025 Gifairy React Ec-project All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

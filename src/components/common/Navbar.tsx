// import { Link } from "react-router-dom"
import { GoSearch, GoGift, GoHeart } from "react-icons/go";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-[50] w-full shadow-[0_1px_5px_2px_rgba(0,0,0,0.2)]">
      {/* Discount messages */}
      <div className="nav-top bg-pri-purple-400 flex items-center justify-center py-2 text-white">
        <p>快輸入優惠碼「GIFAIRY888」即享全站 8 折優惠！</p>
      </div>
      {/* Nav Items */}
      <div className="nav-bottom bg-sec-yellow-100 px-4 text-neutral-700">
        <div className="mx-auto flex max-w-[1140px] flex-col">
          <div className="flex h-full w-full items-center justify-between">
            {/* logo */}
            <div>
              <Link to="/">
                <img
                  className="h-[80px]"
                  src="https://cdn.jsdelivr.net/gh/amy6072698/my-images@main/gifairy-ec-store/logo/main-logo.svg"
                  alt="Gifairy logo"
                />
              </Link>
            </div>
            {/* Search */}
            <form className="relative h-[42px] w-[480px]">
              <input
                type="text"
                placeholder="搜尋你的魔法選物..."
                className="border-sec-yellow-300 h-full w-full rounded-full border-[1px] bg-white pl-5"
              />
              <button className="bg-pri-purple-100 hover:text-pri-purple-300 absolute right-0 h-full cursor-pointer rounded-e-full px-5">
                <GoSearch size="24px" />
              </button>
            </form>

            {/* Right Buttons */}
            <div className="flex items-center gap-3">
              <Link to="/about">
                <button className="hover:text-pri-purple-300 m-2 cursor-pointer">
                  <GoHeart size="1.5rem" />
                </button>
              </Link>
              <Link to="/about">
                <button className="hover:text-pri-purple-300 m-2 cursor-pointer">
                  <GoGift size="1.5rem" />
                </button>
              </Link>
              <Link to="/about">
                <button className="hover:text-pri-purple-300 m-2 cursor-pointer">
                  登入 | 註冊
                </button>
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="nav-bottom flex items-center justify-between py-1">
            <button className="hover:text-pri-purple-300 m-2 cursor-pointer">
              配件飾品
            </button>
            <button className="hover:text-pri-purple-300 m-2 cursor-pointer">
              居家生活
            </button>
            <button className="hover:text-pri-purple-300 m-2 cursor-pointer">
              風格文具
            </button>
            <button className="hover:text-pri-purple-300 m-2 cursor-pointer">
              品味美食
            </button>
            <button className="hover:text-pri-purple-300 m-2 cursor-pointer">
              送禮指南
            </button>
          </div>
        </div>
      </div>

      {/* <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded">
        Home
      </Link>
      <Link to="/about" className="px-4 py-2 bg-blue-500 text-white rounded">
        About
      </Link>
      <Link to="/products" className="px-4 py-2 bg-blue-500 text-white rounded">
        Products
      </Link> */}
    </nav>
  );
};

export default Navbar;

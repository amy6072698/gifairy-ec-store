// import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { GoSearch, GoGift, GoHeart } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 z-[50] w-full">
      <nav className="z-1 relative shadow-[0_1px_2px_0px_rgba(0,0,0,0.2)]">
        {/* Discount messages */}
        <div className="nav-top bg-pri-purple-400 flex items-center justify-center py-2 text-white">
          <p>快輸入優惠碼「GIFAIRY888」即享全站 8 折優惠！</p>
        </div>
        {/* Nav Items */}
        <div className="nav-bottom bg-sec-yellow-100 pl-4 pr-2 text-neutral-700 sm:pr-4">
          <div className="mx-auto flex max-w-[1140px] flex-col">
            <div className="flex h-full w-full items-center justify-between">
              {/* logo */}
              <div>
                <Link to="/">
                  <img
                    className="my-3 h-[32px] sm:h-[48px]"
                    src="https://cdn.jsdelivr.net/gh/amy6072698/my-images@main/gifairy-ec-store/logo/logo.svg"
                    alt="Gifairy logo"
                  />
                </Link>
              </div>
              {/* Search */}
              <form className="relative hidden h-[42px] w-[320px] md:block lg:w-[480px]">
                <input
                  type="text"
                  placeholder="搜尋你的魔法選物..."
                  className="border-sec-yellow-300 h-full w-full rounded-full border-[1px] bg-white pl-5"
                />
                <button
                  type="submit"
                  className="hover:text-pri-purple-300 bg-pri-purple-100 group absolute right-0 h-full cursor-pointer rounded-e-full px-5"
                >
                  <GoSearch className="text-[1.5rem]" />
                </button>
              </form>

              {/* Right Buttons */}
              <div className="hidden items-center gap-1 md:flex lg:gap-3">
                <Link to="/about">
                  <button className="hover:text-pri-purple-300 hover:bg-sec-yellow-200 cursor-pointer rounded-full p-2">
                    <GoHeart className="text-[1.5rem]" />
                  </button>
                </Link>
                <Link to="/about">
                  <button className="hover:text-pri-purple-300 hover:bg-sec-yellow-200 cursor-pointer rounded-full p-2">
                    <GoGift className="text-[1.5rem]" />
                  </button>
                </Link>
                <Link to="/about">
                  <button className="hover:text-pri-purple-300 cursor-pointer p-2">
                    登入 | 註冊
                  </button>
                </Link>
              </div>

              {/* Mobile */}
              <div className="flex gap-1 md:hidden">
                <Link to="/about">
                  <button className="group cursor-pointer p-2">
                    <GoHeart className="group-hover:text-pri-purple-300 text-[1.25rem] group-hover:stroke-[0.5] sm:text-[1.5rem]" />
                  </button>
                </Link>
                <Link to="/about">
                  <button className="group cursor-pointer p-2">
                    <GoGift className="group-hover:text-pri-purple-300 text-[1.25rem] group-hover:stroke-[0.5] sm:text-[1.5rem]" />
                  </button>
                </Link>
                <button
                  className="group cursor-pointer p-2"
                  onClick={() => setIsOpen((prev) => !prev)}
                  aria-label="Toggle menu"
                >
                  <RxHamburgerMenu className="group-hover:text-pri-purple-300 text-[1.25rem] group-hover:stroke-[0.5] sm:text-[1.5rem]" />
                </button>
              </div>
            </div>

            {/* Categories */}
            <ul className="nav-bottom hidden items-center justify-between gap-2 pt-1 md:flex">
              <li className="w-1/5">
                <Link to="/products">
                  <button className="hover:text-pri-purple-300 hover:border-pri-purple-300 border-sec-yellow-100 w-full cursor-pointer border-b-2 p-2 hover:font-medium">
                    配件飾品
                  </button>
                </Link>
              </li>
              <li className="w-1/5">
                <Link to="/products">
                  <button className="hover:text-pri-purple-300 hover:border-pri-purple-300 border-sec-yellow-100 w-full cursor-pointer border-b-2 p-2 hover:font-medium">
                    居家生活
                  </button>
                </Link>
              </li>
              <li className="w-1/5">
                <Link to="/products">
                  <button className="hover:text-pri-purple-300 hover:border-pri-purple-300 border-sec-yellow-100 w-full cursor-pointer border-b-2 p-2 hover:font-medium">
                    風格文具
                  </button>
                </Link>
              </li>
              <li className="w-1/5">
                <Link to="/products">
                  <button className="hover:text-pri-purple-300 hover:border-pri-purple-300 border-sec-yellow-100 w-full cursor-pointer border-b-2 p-2 hover:font-medium">
                    品味美食
                  </button>
                </Link>
              </li>
              <li className="w-1/5">
                <Link to="/products">
                  <button className="hover:text-pri-purple-300 hover:border-pri-purple-300 border-sec-yellow-100 w-full cursor-pointer border-b-2 p-2 hover:font-medium">
                    送禮指南
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-sec-yellow-100 block p-4 md:hidden">
          <div className="mx-auto flex flex-col items-center">
            {/* search */}
            <form
              className="relative mb-2 h-[34px] w-full"
              onSubmit={() => setIsOpen(false)}
            >
              <input
                type="text"
                placeholder="搜尋你的魔法選物..."
                className="border-sec-yellow-300 h-full w-full rounded-full border-[1px] bg-white pl-5"
              />
              <button
                type="submit"
                className="bg-pri-purple-100 group absolute right-0 h-full cursor-pointer rounded-e-full px-5"
              >
                <GoSearch className="group-hover:text-pri-purple-300 text-[1.25rem] group-hover:stroke-[0.5] sm:text-[1.5rem]" />
              </button>
            </form>

            <div className="nav-mobile w-full">
              {/* Categories */}
              <ul className="flex w-full flex-col">
                <li>
                  <Link to="/products">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="hover:text-pri-purple-300 w-full cursor-pointer p-2 hover:font-medium"
                    >
                      配件飾品
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/products">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="hover:text-pri-purple-300 w-full cursor-pointer p-2 hover:font-medium"
                    >
                      居家生活
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/products">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="hover:text-pri-purple-300 w-full cursor-pointer p-2 hover:font-medium"
                    >
                      風格文具
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/products">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="hover:text-pri-purple-300 w-full cursor-pointer p-2 hover:font-medium"
                    >
                      品味美食
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/products">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="hover:text-pri-purple-300 w-full cursor-pointer p-2 hover:font-medium"
                    >
                      送禮指南
                    </button>
                  </Link>
                </li>
              </ul>
              {/* User */}
              <div className="flex w-full flex-col">
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:text-pri-purple-300 w-full cursor-pointer p-2 hover:font-medium"
                >
                  登入 | 註冊
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:text-pri-purple-300 w-full cursor-pointer p-2 hover:font-medium"
                >
                  會員中心
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:text-pri-purple-300 w-full cursor-pointer p-2 hover:font-medium"
                >
                  登出
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

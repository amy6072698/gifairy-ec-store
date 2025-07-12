// import { Link } from "react-router-dom"
import { GoSearch, GoGift, GoHeart } from "react-icons/go";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-top flex justify-center items-center bg-pri-purple-200 text-white py-2">
        <p>快輸入優惠碼「GIFAIRY888」即享全站 8 折優惠！</p>
      </div>
      <div className="nav-middle flex flex-col bg-sec-yellow-100 text-white">
        <div className="container mx-auto flex justify-between">
          <div className="flex items-center">
            <img
              className="h-[80px]"
              src="https://cdn.jsdelivr.net/gh/amy6072698/my-images@main/gifairy-ec-store/logo/main-logo.svg"
              alt="Gifairy logo"
            />
            <input type="text" className="bg-white h-[32px]" />
            <button className="bg-pri-purple-200 p-1">
              <GoSearch size="24px" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-1 text-pri-purple-200 border-1 border-pri-purple-200">
              登入 | 註冊
            </button>
            <button className="p-1 text-pri-purple-200">
              <GoHeart size="24px" />
            </button>
            <button className="p-1 text-pri-purple-200">
              <GoGift size="24px" />
            </button>
          </div>
        </div>

        <div className="nav-bottom flex justify-around items-center py-1">
          <button className="text-pri-purple-200">配件飾品</button>
          <button className="text-pri-purple-200">居家生活</button>
          <button className="text-pri-purple-200">風格文具</button>
          <button className="text-pri-purple-200">品味美食</button>
          <button className="text-pri-purple-200">送禮指南</button>
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

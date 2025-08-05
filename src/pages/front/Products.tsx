import ProductCard from "@/components/common/ProductCard";
import Select from "@/components/common/Select";
import { productsData } from "@/data/products";

const sortOptions = [
  { label: "請選擇價格排序", value: "default" },
  { label: "價格由高到低排序", value: "descendPrice" },
  { label: "價格由低到高排序", value: "ascendPrice" },
];

const categoriesOptions = [
  { label: "所有商品", value: "default" },
  { label: "配件飾品", value: "accessories" },
  { label: "居家生活", value: "lifestyle" },
  { label: "風格文具", value: "stationery" },
  { label: "品味美食", value: "gourmet" },
];

const Products = () => {
  return (
    <div className="mx-auto max-w-[1140px] px-4 pt-10">
      <div>
        <ul className="mb-4 flex gap-2">
          <li>首頁</li>
          <li>產品列表</li>
        </ul>
      </div>
      <div className="flex gap-4 pb-20">
        <div className="w-3/12">
          <h2 className="mb-4 text-[1.5rem]">篩選</h2>
          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="mb-2">商品分類</h3>
              <div>
                <Select
                  options={categoriesOptions}
                  placeholder="請選擇分類"
                  className="focus-visible:ring-sec-yellow-200 w-42 focus-visible:border-sec-yellow-300 rounded-[2px] focus-visible:ring-[1px]"
                  contentClassName="-mt-1 rounded-[2px] -ml-[0.5px]"
                  itemClassName="focus:bg-sec-yellow-200 focus:text-pri-purple-300 rounded-[2px]"
                />
              </div>
            </div>
            <div>
              <h3 className="mb-2">送禮場合</h3>
              <div>
                <Select
                  options={categoriesOptions}
                  placeholder="請選擇分類"
                  className="focus-visible:ring-sec-yellow-200 w-42 focus-visible:border-sec-yellow-300 rounded-[2px] focus-visible:ring-[1px]"
                  contentClassName="-mt-1 rounded-[2px] -ml-[0.5px]"
                  itemClassName="focus:bg-sec-yellow-200 focus:text-pri-purple-300 rounded-[2px]"
                />
              </div>
            </div>
            <div>
              <h3 className="mb-2">送禮對象</h3>
              <div>
                <Select
                  options={categoriesOptions}
                  placeholder="請選擇分類"
                  className="focus-visible:ring-sec-yellow-200 w-42 focus-visible:border-sec-yellow-300 rounded-[2px] focus-visible:ring-[1px]"
                  contentClassName="-mt-1 rounded-[2px] -ml-[0.5px]"
                  itemClassName="focus:bg-sec-yellow-200 focus:text-pri-purple-300 rounded-[2px]"
                />
              </div>
            </div>
            <div>
              <h3 className="mb-2">偏好風格</h3>
              <div>
                <Select
                  options={categoriesOptions}
                  placeholder="請選擇分類"
                  className="focus-visible:ring-sec-yellow-200 w-42 focus-visible:border-sec-yellow-300 rounded-[2px] focus-visible:ring-[1px]"
                  contentClassName="-mt-1 rounded-[2px] -ml-[0.5px]"
                  itemClassName="focus:bg-sec-yellow-200 focus:text-pri-purple-300 rounded-[2px]"
                />
              </div>
            </div>
            <div>
              <h3 className="mb-2">金額</h3>
              <ul>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2">顏色</h3>
              <ul>
                <li>123</li>
                <li>123</li>
                <li>123</li>
                <li>123</li>
              </ul>
            </div>
            <div>
              <input id="custom" type="checkbox" className="mr-2" />
              <label htmlFor="custom">可客製化商品</label>
            </div>
            <div>
              <input id="custom" type="checkbox" className="mr-2" />
              <label htmlFor="custom">手工製造</label>
            </div>
          </div>
        </div>
        <div className="w-9/12">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-[1.5rem]">目前搜尋結果</h2>
              <p className="text-neutral-500">100個搜尋結果</p>
            </div>

            <div>
              <Select
                options={sortOptions}
                placeholder="請選擇價格排序"
                className="focus-visible:ring-sec-yellow-200 w-42 focus-visible:border-sec-yellow-300 rounded-[2px] focus-visible:ring-[1px]"
                contentClassName="-mt-1 rounded-[2px] -ml-[0.5px]"
                itemClassName="focus:bg-sec-yellow-200 focus:text-pri-purple-300 rounded-[2px]"
              />
            </div>
          </div>
          {/* Products */}
          <ul className="-mx-3 flex flex-wrap">
            {productsData.map((product) => (
              <li key={product.id} className="w-4/12">
                <ProductCard product={product} className="m-3" />
              </li>
            ))}
          </ul>

          {/* Pagination */}
          <nav
            aria-label="選擇前往頁數"
            className="mt-10 flex justify-center gap-2"
          >
            <ul className="flex items-center gap-2">
              <li className="page-item">
                <a
                  className="page-link hover:bg-sec-yellow-200 flex h-8 w-8 items-center justify-center rounded-full pt-[1.5px] text-[1.5rem]/[1]"
                  href="#"
                  aria-label="上一頁"
                >
                  <span aria-hidden="true" className="h-full">
                    &lsaquo;
                  </span>
                </a>
              </li>
              {Array.from({ length: 3 }, (_, index) => (
                <li className="page-item" key={index}>
                  <a
                    className="page-link hover:bg-sec-yellow-200 flex h-8 w-8 items-center justify-center rounded-full text-[1rem]/[1]"
                    href="#"
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
              <li className="page-item">
                <a
                  className="page-link hover:bg-sec-yellow-200 flex h-8 w-8 items-center justify-center rounded-full pt-[1.5px] text-[1.5rem]/[1]"
                  href="#"
                  aria-label="下一頁"
                >
                  <span aria-hidden="true" className="h-full">
                    &rsaquo;
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Products;

import Breadcrumb from "@/components/common/Breadcrumb";
import Pagination from "@/components/common/Pagination";
import ProductCard from "@/components/common/ProductCard";
import Select from "@/components/common/Select";
import { productsData } from "@/data/products/products";
import { useEffect, useState } from "react";
import { LuChevronRight } from "react-icons/lu";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { fliterOptions } from "@/data/products/filterOptions";

const Products = () => {
  // Breadcrumb
  const navigate = useNavigate();
  const location = useLocation();

  // Pagination
  const PRODUCTS_PER_PAGE = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(productsData.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = productsData.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  // Filter
  const { sort, category, occasions, recipients, styles, priceRange, colors } =
    fliterOptions;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="mx-auto max-w-[1140px] px-4 pt-10">
      <Breadcrumb onNavigate={navigate} location={location.pathname} />
      <div className="flex gap-4 pb-20">
        {/* Filters */}
        <div className="w-3/12">
          <h2 className="mb-4 text-[1.5rem]">篩選</h2>
          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="mb-2">商品分類</h3>
              <div>
                <Select
                  options={category}
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
                  options={occasions}
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
                  options={recipients}
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
                  options={styles}
                  placeholder="請選擇分類"
                  className="focus-visible:ring-sec-yellow-200 w-42 focus-visible:border-sec-yellow-300 rounded-[2px] focus-visible:ring-[1px]"
                  contentClassName="-mt-1 rounded-[2px] -ml-[0.5px]"
                  itemClassName="focus:bg-sec-yellow-200 focus:text-pri-purple-300 rounded-[2px]"
                />
              </div>
            </div>
            <div>
              <h3 className="mb-2">金額</h3>
              <div className="mb-3">
                <Select
                  options={priceRange}
                  placeholder="請選擇分類"
                  className="focus-visible:ring-sec-yellow-200 w-42 focus-visible:border-sec-yellow-300 rounded-[2px] focus-visible:ring-[1px]"
                  contentClassName="-mt-1 rounded-[2px] -ml-[0.5px]"
                  itemClassName="focus:bg-sec-yellow-200 focus:text-pri-purple-300 rounded-[2px]"
                />
              </div>
              <form className="flex items-center gap-2">
                <span className="text-[0.75rem]">NT$</span>
                <div className="h-7 w-3/12">
                  <input
                    className="h-full w-full rounded-[2px] border-[1px] border-neutral-300 p-1 text-[0.75rem]"
                    placeholder="最小金額"
                    type="text"
                  />
                </div>
                <span className="text-[0.75rem]">-</span>
                <div className="h-7 w-3/12">
                  <input
                    className="h-full w-full rounded-[2px] border-[1px] border-neutral-300 p-1 text-[0.75rem]"
                    placeholder="最大金額"
                    type="text"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-pri-purple-400 cursor-pointer rounded-[2px] p-1 text-white"
                  aria-label="送出"
                >
                  <LuChevronRight aria-hidden="true" />
                </button>
              </form>
            </div>
            <div>
              <h3 className="mb-2">顏色</h3>
              <div>
                <Select
                  options={colors}
                  placeholder="請選擇分類"
                  className="focus-visible:ring-sec-yellow-200 w-42 focus-visible:border-sec-yellow-300 rounded-[2px] focus-visible:ring-[1px]"
                  contentClassName="-mt-1 rounded-[2px] -ml-[0.5px]"
                  itemClassName="focus:bg-sec-yellow-200 focus:text-pri-purple-300 rounded-[2px]"
                />
              </div>
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
        {/* Search Results */}
        <div className="w-9/12">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-[1.5rem]">目前搜尋結果</h2>
              <p className="text-neutral-500">
                {productsData.length} 個搜尋結果
              </p>
            </div>

            <div>
              <Select
                options={sort}
                placeholder="請選擇價格排序"
                className="focus-visible:ring-sec-yellow-200 w-42 focus-visible:border-sec-yellow-300 rounded-[2px] focus-visible:ring-[1px]"
                contentClassName="-mt-1 rounded-[2px] -ml-[0.5px]"
                itemClassName="focus:bg-sec-yellow-200 focus:text-pri-purple-300 rounded-[2px]"
              />
            </div>
          </div>
          {/* Products */}
          <ul className="-mx-3 flex flex-wrap">
            {currentProducts.map((product) => (
              <li key={product.id} className="w-4/12">
                <ProductCard product={product} className="m-3" />
              </li>
            ))}
          </ul>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            className="mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;

import Breadcrumb from "@/components/common/Breadcrumb";
import ProductContents from "@/components/front/productDetail/ProductContents";
import ProductDescription from "@/components/front/productDetail/ProductDescription";
import ProductReviews from "@/components/front/productDetail/ProductReviews";
import RecommendProducts from "@/components/front/productDetail/RecommendProducts";
import { productsData } from "@/data/products/products";
import { useEffect } from "react";
import { useLocation } from "react-router";

import { useNavigate, useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const product = productsData.find((item) => item.id === id);
  useEffect(() => {
    if (!product) {
      navigate("/not-found", { replace: true });
    }
  }, [product, navigate]);
  if (!product) return null;

  return (
    <div className="mx-auto max-w-[1140px] px-4 py-10">
      <Breadcrumb
        product={product}
        onNavigate={navigate}
        location={location.pathname}
        className="ml-10"
      />
      {/* Product Contents */}
      <ProductContents product={product} />
      {/* Product Description */}
      <ProductDescription product={product} />
      {/* Product Reviews */}
      <ProductReviews product={product} />
      {/* Recommend Products */}
      <RecommendProducts />
    </div>
  );
};

export default ProductDetail;

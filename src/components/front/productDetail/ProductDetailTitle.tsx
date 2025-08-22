import { cn } from "@/lib/shadcn/utils";

interface ProductDetailTitleProps {
  title: string;
  className?: string;
}

const ProductDetailTitle = ({ title, className }: ProductDetailTitleProps) => {
  return (
    <div
      className={cn(
        "border-pri-purple-200 mb-6 border-b-[1px] pb-2",
        className,
      )}
    >
      <h2 className="text-[1.25rem] font-medium">{title}</h2>
    </div>
  );
};

export default ProductDetailTitle;

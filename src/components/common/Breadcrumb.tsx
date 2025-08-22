import { cn } from "@/lib/shadcn/utils";
import type { Product } from "@/types/product";
import { LuChevronRight } from "react-icons/lu";

interface BreadcrumbItem {
  label: string;
  path: string;
  isActive: boolean;
}

interface BreadcrumbProps {
  onNavigate: (path: string) => void;
  location: string;
  product?: Product;
  className?: string;
}

const routeNameMap: Record<string, string> = {
  products: "所有商品",
};

const Breadcrumb = ({
  onNavigate,
  location,
  product,
  className,
}: BreadcrumbProps) => {
  const createBreadcrumb = (currentPath: string): BreadcrumbItem[] => {
    if (currentPath === "/") {
      return [];
    }

    const pathItems = currentPath
      .split("/")
      .filter((pathItem) => pathItem !== "");

    const breadcrumbs: BreadcrumbItem[] = [];

    pathItems.forEach((pathItem, index) => {
      const path = "/" + pathItems.slice(0, index + 1).join("/");
      const isActive = index === pathItems.length - 1;
      let label: string;
      if (routeNameMap[pathItem]) {
        label = routeNameMap[pathItem];
      } else if (product?.id === pathItem) {
        label = product?.title;
      } else {
        label = pathItem;
      }

      breadcrumbs.push({
        label,
        path,
        isActive,
      });
    });
    return breadcrumbs;
  };

  const items = createBreadcrumb(location);

  return (
    <nav>
      <ul className={cn("mb-6 flex items-center gap-2", className)}>
        <li>
          <button
            type="button"
            onClick={() => onNavigate("/")}
            className="hover:text-pri-purple-200 cursor-pointer text-neutral-500 hover:underline"
          >
            首頁
          </button>
        </li>

        {items.length > 0 && (
          <LuChevronRight className="h-4 w-4 text-neutral-400" />
        )}

        {items.map((item, index) => (
          <li className="flex items-center gap-2" key={index}>
            {item.isActive ? (
              <span className="text-pri-purple-300 font-medium">
                {item.label}
              </span>
            ) : (
              <button
                type="button"
                onClick={() => onNavigate(item.path)}
                className="hover:text-pri-purple-200 cursor-pointer text-neutral-500 hover:underline"
              >
                {item.label}
              </button>
            )}

            {index < items.length - 1 && (
              <LuChevronRight className="h-4 w-4 text-neutral-400" />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;

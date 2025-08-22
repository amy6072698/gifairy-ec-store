import { cn } from "@/lib/shadcn/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) => {
  return (
    <nav
      aria-label="選擇前往頁數"
      className={cn("flex justify-center gap-2", className)}
    >
      <ul className="flex items-center gap-2">
        <li className="page-item">
          <button
            className="hover:bg-sec-yellow-200 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full pt-[1.5px] text-[1.5rem]/[1] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white"
            type="button"
            aria-label="上一頁"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <span aria-hidden="true" className="h-full">
              &lsaquo;
            </span>
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => (
          <li className="page-item" key={i + 1}>
            <button
              className={`hover:bg-sec-yellow-200 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-[1rem]/[1] ${currentPage === i + 1 && "bg-sec-yellow-200"}`}
              type="button"
              onClick={() => onPageChange(i + 1)}
            >
              {i + 1}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            className="hover:bg-sec-yellow-200 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full pt-[1.5px] text-[1.5rem]/[1] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white"
            type="button"
            aria-label="下一頁"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <span aria-hidden="true" className="h-full">
              &rsaquo;
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

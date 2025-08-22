import { cn } from "@/lib/shadcn/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  outline?: boolean;
}

const Badge = ({ children, className, outline }: BadgeProps) => {
  return (
    <span
      className={cn(
        `rounded-[2px] px-2 py-1 text-[0.875rem] ${outline ? "border-[1px] text-neutral-900" : "text-white"}`,
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Badge;

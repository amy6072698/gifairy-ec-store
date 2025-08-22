import { cn } from "@/lib/shadcn/utils";
import type { ReactNode } from "react";
import { FaRegStar, FaStarHalfAlt, FaStar } from "react-icons/fa";

interface RatingStarsProps {
  rating: number;
  className?: string;
  children?: ReactNode;
}

const RatingStars = ({ rating, className, children }: RatingStarsProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.1;
  const emptyStars = 5 - fullStars - Number(hasHalfStar);

  return (
    <div className={cn("text-sec-yellow-500 flex items-center", className)}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <FaStar aria-hidden="true" key={`full-${i}`} />
      ))}
      {hasHalfStar && <FaStarHalfAlt aria-hidden="true" key="half" />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <FaRegStar aria-hidden="true" key={`empty-${i}`} />
      ))}
      <span aria-label={`評分${rating.toFixed(1)}`}>{rating.toFixed(1)}</span>
      {children}
    </div>
  );
};

export default RatingStars;

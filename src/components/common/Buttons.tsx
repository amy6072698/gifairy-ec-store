import { Button as ShadcnButton } from "@/components/ui/shadcn/button";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "default" | "destructive";
  onClick?: () => void;
  className?: string;
  isAsChild?: boolean;
}

export const Button = ({
  children,
  variant = "default",
  onClick,
  className,
  isAsChild,
}: ButtonProps) => {
  return (
    <ShadcnButton
      variant={variant}
      onClick={onClick}
      className={`cursor-pointer ${className}`}
      {...(isAsChild && { asChild: true })}
    >
      {children}
    </ShadcnButton>
  );
};

export const PillButton = ({
  children,
  variant = "default",
  onClick,
  className,
  isAsChild,
}: ButtonProps) => {
  return (
    <ShadcnButton
      variant={variant}
      onClick={onClick}
      className={`rounded-full cursor-pointer ${className}`}
      {...(isAsChild && { asChild: true })}
    >
      {children}
    </ShadcnButton>
  );
};

export const PrimaryButton = ({
  children,
  variant = "default",
  onClick,
  className,
  isAsChild,
}: ButtonProps) => {
  return (
    <ShadcnButton
      variant={variant}
      onClick={onClick}
      className={`rounded-full cursor-pointer bg-pri-purple-400 text-white hover:bg-pri-purple-300 active:shadow-[0_0_2px_2px_rgba(82,41,71)]  duration-[0.3s] ${className}`}
      {...(isAsChild && { asChild: true })}
    >
      {children}
    </ShadcnButton>
  );
};

export const SecondaryButton = ({
  children,
  variant = "default",
  onClick,
  className,
  isAsChild,
}: ButtonProps) => {
  return (
    <ShadcnButton
      variant={variant}
      onClick={onClick}
      className={`rounded-full cursor-pointer bg-sec-yellow-200 text-pri-purple-400 hover:bg-sec-yellow-200 shadow-[inset_0_0_0_2px_rgba(82,41,71,0.3)] hover:shadow-[inset_0_0_0_2px_rgba(82,41,71,0.8)] active:shadow-[0px_0_4px_2px_rgba(82,41,71)] duration-[0.3s] ${className}`}
      {...(isAsChild && { asChild: true })}
    >
      {children}
    </ShadcnButton>
  );
};

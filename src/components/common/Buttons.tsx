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
      className={`cursor-pointer rounded-full ${className}`}
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
      className={`bg-pri-purple-400 hover:bg-pri-purple-300 cursor-pointer rounded-full text-white duration-[0.3s] active:shadow-[0_0_2px_2px_rgba(82,41,71)] ${className}`}
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
      className={`bg-sec-yellow-200 text-pri-purple-400 hover:bg-sec-yellow-200 cursor-pointer rounded-full shadow-[inset_0_0_0_2px_rgba(82,41,71,0.3)] duration-[0.3s] hover:shadow-[inset_0_0_0_2px_rgba(82,41,71,0.8)] active:shadow-[0px_0_4px_2px_rgba(82,41,71)] ${className}`}
      {...(isAsChild && { asChild: true })}
    >
      {children}
    </ShadcnButton>
  );
};

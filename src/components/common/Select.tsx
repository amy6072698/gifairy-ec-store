import {
  Select as ShadcnSelect,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/shadcn/select";

import * as SelectPrimitive from "@radix-ui/react-select";
import { GoDotFill } from "react-icons/go";

import { cn } from "@/lib/shadcn/utils";
import type { ComponentProps } from "react";

interface Option {
  value: string | "";
  label: string;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  onChange?: (value: string) => void;
  itemClassName?: string;
  contentClassName?: string;
  className?: string;
}

const Select = ({
  options,
  placeholder,
  onChange,
  className,
  contentClassName,
  itemClassName,
}: SelectProps) => {
  return (
    <ShadcnSelect onValueChange={onChange}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className={contentClassName}>
        {options.map((option, index) => (
          <SelectItem
            key={index}
            value={option.value}
            className={itemClassName}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </ShadcnSelect>
  );
};

const SelectItem = ({
  className,
  children,
  ...props
}: ComponentProps<typeof SelectPrimitive.Item>) => {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground outline-hidden *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-2 pr-8 text-sm data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <GoDotFill className="text-pri-purple-100 size-3" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
};

export default Select;

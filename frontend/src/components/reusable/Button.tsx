import React, { ButtonHTMLAttributes } from "react";
import cn from "../../utils/cn";
import { VariantProps, cva } from "class-variance-authority";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
}

export default function Button({
  className,
  variant,
  size,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...rest}
    >
      {children}
    </button>
  );
}

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      auth: "btn-block mt-2",
      sidebar: "btn-circle bg-purple-500 text-white",
    },
    size: {
      sm: "btn-sm tablet:btn-md",
      md: "",
    },
  },
  defaultVariants: {
    variant: "auth",
    size: "sm",
  },
});

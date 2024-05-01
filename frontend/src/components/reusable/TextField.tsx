import { InputHTMLAttributes } from "react";
import cn from "../../utils/cn";
import { VariantProps, cva } from "class-variance-authority";

interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  label?: string;
  onChange?: () => void;
}

export default function TextField({
  size,
  variant,
  className,
  onChange,
  label,
  ...rest
}: TextFieldProps) {
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        className={cn(inputVariants({ className, size, variant }))}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}

const inputVariants = cva("", {
  variants: {
    variant: {
      primary: "",
    },
    size: {
      md: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

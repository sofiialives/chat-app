import { InputHTMLAttributes } from "react";
import cn from "../../utils/cn";
import { VariantProps, cva } from "class-variance-authority";

interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariant> {
  label?: string;
}

export default function TextField({
  className,
  variant,
  label,
  ...rest
}: TextFieldProps) {
  return (
    <div>
      {label && (
        <label className="label p-0 mb-2 tablet:mb-3 text-base tablet:text-lg label-text text-gray-300">
          {label}
        </label>
      )}
      <input className={cn(inputVariant({ variant, className }))} {...rest} />
    </div>
  );
}

const inputVariant = cva("input input-bordered", {
  variants: {
    variant: {
      form: "h-10 w-[260px] tablet:w-[600px]",
      radio: "",
      message: "",
    },
  },
  defaultVariants: {
    variant: "form",
  },
});

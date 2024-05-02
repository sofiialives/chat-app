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
        <label className="label p-2 text-base label-text text-gray-300">
          {label}
        </label>
      )}
      <input {...rest} className={cn(inputVariant({ variant, className }))} />
    </div>
  );
}

const inputVariant = cva("input input-bordered w-full", {
  variants: {
    variant: {
      form: "h-10",
      radio: "",
      message: "",
    },
  },
  defaultVariants: {
    variant: "form",
  },
});

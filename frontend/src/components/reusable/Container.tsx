import React from "react";
import cn from "../../utils/cn";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center mx-auto px-4 tablet:px-6 min-w-[320px] max-w-[767px] tablet:max-w-[768px] desktop:max-w-[1488px]",
        className
      )}
    >
      {children}
    </div>
  );
}
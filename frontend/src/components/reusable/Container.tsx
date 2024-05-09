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
        "mx-auto w-full max-w-screen-l px-4 tablet:px-6 desktop:px-14",
        className
      )}
    >
      {children}
    </div>
  );
}

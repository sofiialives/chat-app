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
        "mx-auto px-4 tablet:px-6 min-w-[320px] max-w-[767px] tablet:max-w-[1200px] rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}

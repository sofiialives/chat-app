import React from "react";
import cn from "../../utils/cn";

interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

export default function Section({ className, children }: SectionProps) {
  return (
    <section
      className={cn(
        "flex flex-col items-center justify-center h-screen py-10",
        className
      )}
    >
      {children}
    </section>
  );
}

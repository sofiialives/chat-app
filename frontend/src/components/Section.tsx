import React from "react";
import cn from "../utils/cn";

interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

export default function Section({ className, children }: SectionProps) {
  return <section className={cn("py-10", className)}>{children}</section>;
}

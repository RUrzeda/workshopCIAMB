import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SlideWrapperProps {
  children: ReactNode;
  className?: string;
}

export const SlideWrapper = ({ children, className }: SlideWrapperProps) => {
  return (
    <div
      className={cn(
        "min-h-screen w-full flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24",
        "bg-background font-body",
        className
      )}
    >
      <div className="max-w-6xl mx-auto w-full animate-fade-in">
        {children}
      </div>
    </div>
  );
};

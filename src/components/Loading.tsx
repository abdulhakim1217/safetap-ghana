// @ts-nocheck
import React from "react";
import { cn } from "@/lib/utils";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  text?: string;
}

export function Loading({ size = "md", className, text }: LoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className={cn("flex flex-col items-center justify-center gap-3", className)}>
      <div
        className={cn(
          "animate-spin rounded-full border-2 border-clay/20 border-t-clay",
          sizeClasses[size],
        )}
        role="status"
        aria-label="Loading"
      />
      {text && <p className="text-sm text-ink/70 animate-pulse">{text}</p>}
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export function LoadingPage({ text = "Loading SafeTap Ghana..." }: { text?: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sand">
      <Loading size="lg" text={text} />
    </div>
  );
}

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-block w-4 h-4 animate-spin rounded-full border-2 border-current border-t-transparent",
        className,
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

import React from "react";

interface BadgeProps {
  variant?: "default" | "outline";
  className?: string;
  children: React.ReactNode;
}

export function Badge({
  variant = "default",
  className = "",
  children,
}: BadgeProps) {
  const variantClasses = {
    default: "bg-blue-100 text-blue-800",
    outline: "bg-transparent border border-gray-300 text-gray-700",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

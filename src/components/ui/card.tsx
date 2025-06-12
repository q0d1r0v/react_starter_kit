import React from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className = "", children }: CardProps) {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children }: CardProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

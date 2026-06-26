import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return <div className={`rounded-lg border border-slate-100 bg-white shadow-soft ${className}`}>{children}</div>;
}
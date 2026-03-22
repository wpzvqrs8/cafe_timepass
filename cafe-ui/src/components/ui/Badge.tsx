import React from 'react';
import { cn } from '../../utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'success' | 'error' | 'outline' | 'veg' | 'nonveg';
}

export function Badge({ className, variant = 'primary', ...props }: BadgeProps) {
  const variants = {
    primary: 'bg-primary/20 text-primary-warm border border-primary/30',
    success: 'bg-success/20 text-success border border-success/30',
    error: 'bg-error/20 text-error border border-error/30',
    outline: 'bg-transparent text-text-muted border border-text-muted/30',
    veg: 'bg-green-500/10 text-green-500 border border-green-500/30 font-bold',
    nonveg: 'bg-red-500/10 text-red-500 border border-red-500/30 font-bold',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono tracking-wider',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

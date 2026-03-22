import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils';

interface CardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hoverEffect ? { y: -5, scale: 1.01 } : undefined}
        className={cn(
          'bg-surface rounded-2xl overflow-hidden border border-surface-raised shadow-lg shadow-black/20 transition-shadow',
          hoverEffect && 'hover:shadow-xl hover:shadow-black/40 hover:border-primary/20',
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

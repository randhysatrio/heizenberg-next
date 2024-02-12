'use client';

import { HTMLMotionProps, motion } from 'framer-motion';

export default function ClickableText({
  children,
  className,
  ...props
}: HTMLMotionProps<'span'>) {
  return (
    <motion.span
      {...props}
      className={`w-fit cursor-pointer ${className || ''}`}
    >
      {children}
    </motion.span>
  );
}

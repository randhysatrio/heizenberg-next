'use client';

import clsx from 'clsx';

import { HTMLMotionProps, motion } from 'framer-motion';

export default function ClickableText({
  children,
  className,
  ...props
}: HTMLMotionProps<'span'>) {
  return (
    <motion.span {...props} className={clsx('w-fit cursor-pointer', className)}>
      {children}
    </motion.span>
  );
}

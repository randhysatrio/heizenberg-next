'use client';

// LIBS
import { type HTMLMotionProps, type Variant, motion } from 'framer-motion';

// ICON
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

type ElementAnimation = Record<string, Variant>;
const VARIANTS: ElementAnimation = {
  animate: (loading) => ({ y: loading ? '-50%' : '0%' }),
};

type AnimatedButtonProps = {
  children: React.ReactNode;
  loading: boolean;
  finish: boolean;
  finishEl?: React.ReactNode | undefined;
} & HTMLMotionProps<'button'>;
export default function AnimatedButton({
  children,
  loading,
  finish,
  finishEl,
  type = 'button',
  className,
  ...props
}: AnimatedButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ filter: `brightness(1.1)` }}
      {...props}
      type={type}
      className={`h-10 w-full overflow-hidden rounded-md bg-sky-500 font-rubik-bold text-white shadow-md disabled:pointer-events-none disabled:brightness-75 lg:h-11 ${className ?? ''}`}
    >
      <motion.div
        custom={loading}
        animate="animate"
        variants={VARIANTS}
        className="flex h-[200%] w-full flex-col"
        transition={{ bounce: 0 }}
      >
        <span className="flex h-1/2 w-full items-center justify-center gap-2">
          {finish && finishEl ? finishEl : children}
        </span>
        <span className="flex h-1/2 w-full items-center justify-center gap-2">
          <AiOutlineLoading3Quarters className="h-4 w-4 animate-spin" />
        </span>
      </motion.div>
    </motion.button>
  );
}

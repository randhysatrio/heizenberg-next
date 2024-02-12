'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';

import useMeasure from 'react-use-measure';

type HoverDropdownProps = {
  header: React.ReactNode;
  children: React.ReactNode;
};
export default function HoverDropdown({
  header,
  children,
}: HoverDropdownProps) {
  // OPEN CLOSE STATES
  const [open, setOpen] = useState(false);

  // ELEMENT MEASURE
  const [ref, { height }] = useMeasure();

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative flex w-fit flex-col items-center"
    >
      {header}

      <motion.article
        animate={{ height }}
        transition={{ bounce: 0 }}
        className="absolute top-[100%] z-10 origin-top overflow-hidden"
      >
        {open && (
          <div ref={ref} className="w-fit">
            {children}
          </div>
        )}
      </motion.article>
    </div>
  );
}

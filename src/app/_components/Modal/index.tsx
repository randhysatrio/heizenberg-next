'use client';

// CORE
import { useEffect } from 'react';

// LIBS
import clsx from 'clsx';

// COMPONENTS
import { motion, AnimatePresence, Variant } from 'framer-motion';

// INTERFACES
export type BaseModalVariants = Record<'open' | 'close', Variant>;

const OVERLAY_VARIANTS: BaseModalVariants = {
  open: {
    opacity: 1,
  },
  close: {
    opacity: 0,
  },
};

type BaseModalProps = {
  children: React.ReactNode;
  open: boolean;
  close: () => void;
  overlayClassname?: string | undefined;
  modalBodyClassname?: string | undefined;
  overlayVariants?: BaseModalVariants | undefined;
  modalBodyVariants?: BaseModalVariants | undefined;
  onMount?: () => void | Promise<() => void> | undefined;
  onUnmount?: () => void | Promise<() => void> | undefined;
};
export default function BaseModal({
  children,
  open,
  close,
  overlayClassname,
  modalBodyClassname,
  overlayVariants,
  modalBodyVariants,
  onMount,
  onUnmount,
}: BaseModalProps) {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          key="__modal-overlay"
          variants={overlayVariants ?? OVERLAY_VARIANTS}
          initial="close"
          animate="open"
          exit="close"
          className={clsx(
            'fixed inset-0 z-[9000] flex overflow-y-auto overscroll-contain bg-black/50',
            overlayClassname
          )}
          onClick={close}
        >
          <BaseModalBody
            close={close}
            modalBodyClassname={modalBodyClassname}
            modalBodyVariants={modalBodyVariants}
            onMount={onMount}
            onUnmount={onUnmount}
          >
            {children}
          </BaseModalBody>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const MODAL_BODY_VARIANTS: BaseModalVariants = {
  open: {
    y: '0%',
    transition: {
      bounce: 0,
    },
  },
  close: {
    y: '-25%',
    transition: {
      bounce: 0,
    },
  },
};

type BaseModalBodyProps = Omit<
  BaseModalProps,
  'open' | 'overlayClassname' | 'overlayVariants'
>;
function BaseModalBody({
  children,
  close,
  modalBodyClassname,
  modalBodyVariants,
  onMount,
  onUnmount,
}: BaseModalBodyProps) {
  useEffect(() => {
    function closeOnEsc(e: KeyboardEvent) {
      if (e.code === 'Escape') {
        close();
      }
    }
    if (onMount) {
      onMount();
    }
    window.addEventListener('keydown', closeOnEsc);
    document.body.style.overflowY = 'hidden';

    return () => {
      if (onUnmount) {
        onUnmount();
      }
      window.removeEventListener('keydown', closeOnEsc);
      document.body.style.overflowY = 'unset';
    };
  }, []);

  return (
    <motion.article
      role="dialog"
      key="__base-modal-body"
      variants={modalBodyVariants ?? MODAL_BODY_VARIANTS}
      onClick={(e) => e.stopPropagation()}
      className={clsx('m-auto h-fit w-fit', modalBodyClassname)}
    >
      {children}
    </motion.article>
  );
}

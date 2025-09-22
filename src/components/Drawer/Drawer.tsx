'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const drawerVariants = {
  hidden: { x: '100%' },
  visible: { x: '0%' },
  exit: { x: '100%' },
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer = ({ isOpen, onClose, children }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed top-0 right-0 w-full max-w-[90%] sm:max-w-[400px] h-full bg-white shadow-lg z-[1000]"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;

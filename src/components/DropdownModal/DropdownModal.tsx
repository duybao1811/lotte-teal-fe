'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Backdrop from '@/components/Backdrop/Backdrop';
import Logo from '@/assets/logo.svg';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';

interface DropdownModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxHeight?: string;
}

const DropdownModal = ({ open, onClose, children, maxHeight = '100vh' }: DropdownModalProps) => {
  return (
    <>
      <Backdrop isOpen={open} onClick={onClose} blurIntensity="md" className={'z-30'}>
        <motion.div
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 right-0 w-full bg-white overflow-auto pt-8"
          style={{ maxHeight }}
        >
          <div className={'max-w-container flex items-center justify-between'}>
            <Image src={Logo.src} alt="Logo" width={270} height={40} />
            <div className={'cursor-pointer'} onClick={onClose}>
              <IoClose size={24} />
            </div>
          </div>
          {children}
        </motion.div>
      </Backdrop>
    </>
  );
};

export default DropdownModal;

'use client';
import React from 'react';
import MouseIcon from '@/assets/icons/ic_mouse.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ScrollDownIcon = () => {
  return (
    <div className={'absolute bottom-8 left-1/2 -translate-x-1/2 z-10 md:block hidden'}>
      <motion.div
        className="flex flex-col gap-2 items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Image
          src={MouseIcon}
          alt="Scroll Down Icon"
          width={32}
          height={48}
          className={'w-8 h-12'}
        />
        <p className="text-xs font-medium text-white">SCROLL DOWN</p>
      </motion.div>
    </div>
  );
};

export default ScrollDownIcon;

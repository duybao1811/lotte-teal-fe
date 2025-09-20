'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import clsx from 'clsx';

interface Props {
  title: string;
  subTitle: string;
  content?: string;
  className?: string;
}

const HeadingSection = ({ title, subTitle, content, className }: Props) => {
  const containerRef = useRef(null);
  const containerInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={containerRef}
      initial={{ x: -100, opacity: 0 }}
      animate={containerInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={clsx('md:mb-16 sm:mb-14 mb-12 text-center px-4', className)}
    >
      <h5 className={'lg:text-4.5xl md:text-3.5xl text-2.5xl font-extrabold mb-1'}>{title}</h5>
      <div className={'flex items-center justify-center gap-3'}>
        <div className={'h-4 w-[1.5px] bg-primary'} />
        <h6 className={'text-primary text-lg sm:text-xl md:text-[22xl] font-medium'}>{subTitle}</h6>
        <div className={'h-4 w-[1.5px] bg-primary'} />
      </div>
      <p className={'text-sm sm:text-base md:text-lg mt-6 font-medium whitespace-pre-line'}>
        {content}
      </p>
    </motion.div>
  );
};

export default HeadingSection;

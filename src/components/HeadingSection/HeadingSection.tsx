'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import clsx from 'clsx';

interface Props {
  title: string;
  subTitle?: string;
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
      className={clsx('mb-16 text-center px-4', className)}
    >
      <h5 className={'text-4.5xl font-extrabold'}>{title}</h5>
      {subTitle ? (
        <div className={'flex items-center justify-center gap-3 mt-3'}>
          <div className={'h-4 w-[1.5px] bg-primary'} />
          <h6 className={'text-primary text-xl font-extrabold'}>{subTitle}</h6>
          <div className={'h-4 w-[1.5px] bg-primary'} />
        </div>
      ) : null}
      {content ? <p className={'text-lg font-bold mt-6 whitespace-pre-line'}>{content}</p> : null}
    </motion.div>
  );
};

export default HeadingSection;

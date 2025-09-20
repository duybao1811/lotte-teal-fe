'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { motion, useInView } from 'framer-motion';

interface Props {
  image: string;
  title: string;
  content: string;
}

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const SusManagementColumnMobile = ({ image, title, content }: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Hiệu ứng chỉ chạy 1 lần khi 50% item vào viewport

  return (
    <div
      ref={ref}
      className={
        'min-w-screen flex flex-col items-center justify-center h-[680px] relative snap-center shrink-0 w-full text-white text-center gap-6 px-4'
      }
    >
      <Image
        src={image}
        alt={`Sustainability Management ${title}`}
        fill
        objectFit={'cover'}
        className={'absolute inset-0 -z-1'}
      />
      <div className={'absolute inset-0 bg-black/30 -z-1'}></div>

      <motion.h3
        className={'font-bold text-3.5xl'}
        variants={textVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h3>

      <motion.p
        className={'whitespace-pre-line text-xl font-bold'}
        variants={textVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {content}
      </motion.p>

      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Link
          href={'/'}
          className={'border border-white rounded-full font-extrabold text-lg px-12 py-2'}
        >
          VIEW MORE
        </Link>
      </motion.div>
    </div>
  );
};

export default SusManagementColumnMobile;

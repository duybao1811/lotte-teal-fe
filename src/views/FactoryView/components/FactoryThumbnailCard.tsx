'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface FactoryThumbnailCardProps {
  title: string;
  image: string;
}

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const FactoryThumbnailCard = ({ title, image }: FactoryThumbnailCardProps) => {
  return (
    <div>
      <motion.div
        className="relative w-full aspect-[680/360] min-h-[280px] rounded-2xl overflow-hidden mb-5"
        variants={imageVariants}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 680px"
        />
      </motion.div>

      <motion.div
        className="flex items-center gap-4 md:pl-10"
        variants={textVariants}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="w-3 h-3 min-w-3 min-h-3 rounded-full border-[3px] border-primary" />
        <p className="font-extrabold text-2xl">{title}</p>
      </motion.div>
    </div>
  );
};

export default FactoryThumbnailCard;

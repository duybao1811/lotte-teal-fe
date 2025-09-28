'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  description?: string;
  image: string;
  mbImage?: string;
  priority?: boolean;
}

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const BannerItem = ({ title, description, image, mbImage, priority }: Props) => {
  return (
    <motion.div
      className="relative w-full h-full flex flex-col md:justify-center justify-start text-white md:px-40 px-6 md:gap-10 gap-6 md:py-0 py-56"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <picture>
        <source srcSet={mbImage || image} media="(max-width: 768px)" />
        <Image
          src={image}
          alt="Banner"
          fill
          unoptimized
          quality={100}
          priority={priority}
          className="absolute inset-0 -z-10 object-cover"
        />
      </picture>

      <motion.h1
        className="text-64 leading-[5rem] font-extrabold whitespace-pre-line"
        variants={textVariants}
        transition={{
          duration: 0.8,
        }}
      >
        {title}
      </motion.h1>

      {description ? (
        <motion.p
          className="whitespace-pre-line text-3xl"
          variants={textVariants}
          transition={{
            duration: 0.8,
          }}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
};

export default BannerItem;

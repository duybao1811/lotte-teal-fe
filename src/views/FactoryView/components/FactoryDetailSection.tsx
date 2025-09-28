'use client';
import React from 'react';
import Image from 'next/image';
import MapExample from '@/assets/images/factory/map_example.png';
import { motion } from 'framer-motion';

interface FactoryDetailSectionProps {
  companyName: string;
  department?: string;
  address: string;
  phoneNumber: string;
  faxNumber: string;
  image: string;
  mainProducts?: string;
}

const leftImageVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const rightImageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const listContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const FactoryDetailSection = ({
  companyName,
  department,
  address,
  faxNumber,
  phoneNumber,
  image,
  mainProducts,
}: FactoryDetailSectionProps) => {
  const infoList = [
    { label: '주요 생산 제품', value: mainProducts },
    { label: '위치', value: address },
    { label: '전화번호', value: phoneNumber },
    { label: '팩스번호', value: faxNumber },
  ];

  return (
    <div className={'md:py-28 py-15 bg-[#F2F2F2]'}>
      <div className={'grid md:grid-cols-2 gap-10 max-w-content'}>
        <motion.div
          variants={leftImageVariants}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src={image}
            alt={'롯데인프라셀 본사 건물 이미지'}
            width={680}
            height={658}
            className={'w-full rounded-2xl overflow-hidden'}
            objectFit={'contain'}
          />
        </motion.div>

        <div className={'flex flex-col md:pt-10'}>
          <motion.p
            className={'text-4.5xl font-extrabold mb-2.5 md:text-left text-center'}
            variants={textVariants}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {companyName}
          </motion.p>
          {department ? (
            <motion.p
              className={'text-2xl font-extrabold text-primary mb-10 md:text-left text-center'}
              variants={textVariants}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: 'easeOut',
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {department}
            </motion.p>
          ) : null}

          <motion.div
            className="space-y-5 mb-10"
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {infoList.map(({ label, value }) => {
              if (!value) return null;
              return (
                <motion.div
                  key={label}
                  className="grid md:grid-cols-[100px_1fr] grid-cols-[80px_1fr]"
                  variants={listItemVariants}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <p className="font-extrabold text-xl">{label}</p>
                  <p className="font-medium text-xl">{value}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className={'md:flex-1 relative w-full md:aspect-auto aspect-[624/400]'}
            variants={rightImageVariants}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Image
              src={MapExample}
              alt={'map'}
              fill
              className={'rounded-2xl overflow-hidden'}
              objectFit={'cover'}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FactoryDetailSection;

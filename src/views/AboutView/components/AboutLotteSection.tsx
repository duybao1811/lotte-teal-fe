'use client';
import React from 'react';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import Image from 'next/image';
import LotteBuilding from '@/assets/images/about/lotte_building.webp';
import CanImg from '@/assets/images/about/can.webp';
import { motion } from 'framer-motion';

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const AboutLotteSection = () => {
  return (
    <div className={'max-w-content'}>
      <p className={'font-extrabold text-2xl text-gray2 mb-6'}>기업개요</p>
      <h1 className={'md:text-56 text-4.5xl whitespace-pre-line mb-15'}>
        롯데알미늄은 1966년에 설립된
        {`\n`}
        <span className={'font-extrabold'}>국내 최대의 종합 포장 소재기업</span>입니다.
      </h1>
      <Breadcrumb
        items={[
          { label: '회사소개', href: '/' },
          { label: '기업개요', href: '/' },
        ]}
      />
      <div className={'mt-20 grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-15'}>
        <motion.div
          variants={leftImageVariants}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={LotteBuilding}
            alt={'Lotte Building'}
            width={680}
            height={760}
            className={'h-full rounded-3xl'}
          />
        </motion.div>
        <div>
          <motion.div
            variants={rightImageVariants}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={'w-full mb-15 md:block hidden'}
          >
            <Image
              src={CanImg}
              alt={'Can product'}
              width={680}
              height={408}
              className={'w-full rounded-2xl'}
            />
          </motion.div>
          <motion.p
            className={'whitespace-pre-line md:pb-8 text-lg md:px-10'}
            variants={textVariants}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            국내 포장 소재 역사와 함께한 롯데알미늄은 알루미늄박 및 인쇄포장재, 골판지상자, CAN,
            자판기, 쇼케이스, 생활용품 등 다양한 제품을 생산하고 있으며 롯데 브랜드에 걸맞은 최고의
            품질과 기술을 제공하고 있습니다.
            {`\n\n`}
            새로운 모습으로 도약을 꿈꾸는 롯데알미늄은 글로벌 경쟁력 확보와 브랜드 가치향상,
            기술혁신으로 세계 정상의 제품, 생산성을 확보해 아시아를 선도하는 글로벌 신소재 기업으로
            성장해 나갈 것입니다.
            {`\n\n`}
            또한, 인간과 환경을 생각하는 녹색기술로 미래가치를 창조하고 고객만족을 실현시켜 세계
            소재 시장의 리더로 도약하겠습니다.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutLotteSection;

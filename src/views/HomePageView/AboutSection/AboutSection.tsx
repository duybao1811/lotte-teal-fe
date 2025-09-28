'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import AboutBannerImg from '@/assets/images/banner/about_banner.webp';
import { Link } from '@/i18n/navigation';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} className="w-full h-[520px] relative overflow-hidden">
      <Image
        src={AboutBannerImg}
        alt="About banner background"
        fill
        priority
        quality={100}
        className="object-cover object-[top_right] -z-10"
      />
      <div
        className={
          'h-full max-w-content flex flex-col items-center justify-center text-center gap-10 text-white'
        }
      >
        <motion.h2
          className="whitespace-pre-line font-extrabold text-4.5xl"
          variants={fadeUpVariants}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          About{`\n`}LOTTE ALUMINIUM
        </motion.h2>

        <motion.p
          className="whitespace-pre-line text-lg"
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        >
          국내 포장 소재 역사와 함께한 롯데알미늄은
          {`\n`}
          알루미늄박 및 인쇄포장재, 골판지상자, CAN, 자판기, 쇼케이스, 생활용품 등{`\n`}
          다양한 제품을 생산하고 있으며 롯데 브랜드에 걸맞은 최고의 품질과 기술을 제공하고 있습니다.
        </motion.p>

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1.3 }}
        >
          <Link
            href="/about"
            className="border border-white rounded-full font-extrabold text-lg flex items-center justify-center min-w-[190px] min-h-[40px]"
          >
            VIEW MORE
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;

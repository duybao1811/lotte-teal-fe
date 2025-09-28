'use client';
import React from 'react';
import Image from 'next/image';
import CeoAvatar from '@/assets/images/about/ceo.webp';
import CeoSignImage from '@/assets/images/about/ceo_sign.png';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { motion } from 'framer-motion';

const imageVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

const textContainerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.25,
            delay: 0.2,
        },
    },
};

const childTextVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
        },
    },
};

const MessageFromCeo = () => {
    return (
        <div className={'grid md:grid-cols-2 md:gap-10 gap-15 max-w-content'}>
            <motion.div
                className={'md:py-8 md:order-1 order-2'}
                variants={textContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h3
                    className="relative md:whitespace-pre-line font-extrabold text-3.5xl inline-block mb-12 md:text-right w-full"
                    variants={childTextVariants}
                >
          <span className="inline-block ml-2 align-baseline relative -top-4 left-1">
            <RiDoubleQuotesL size={20} className="inline-block text-gray-300" />
          </span>
                    새로운 자신감으로 새롭게 도전하는
                    {'\n'}
                    롯데 알미늄이 되겠습니다
                    <span className="inline-block ml-2 align-baseline relative -top-4 right-2">
            <RiDoubleQuotesR size={20} className="text-gray-300" />
          </span>
                </motion.h3>
                <motion.p
                    className={'text-lg whitespace-pre-line mb-9 md:text-right'}
                    variants={childTextVariants}
                >
                    롯데알미늄은 1966년 설립되어 국내 포장 소재 산업의 역사와 성장을 하였습니다. 또한 지속적인
                    기술혁신과 적극적인 투자를 바탕으로 최고의 품질과 세계적 경쟁력을 확보한 글로벌 소재
                    기업으로 도약하였습니다.
                    {`\n\n`}
                    꾸준한 체질 개선을 통해 경영환경 변화에 대응해 온 롯데알미늄은 최근 이차전지 소재사업에
                    진출하여 사업영역을 확대하고 친환경 포장재 제품을 확대하며 친환경 사업 포트폴리오를 강화해
                    나가고 있습니다.
                    {`\n\n`}
                    앞으로도 지속가능한 경영활동을 통해 인류의 풍요로운 삶에 기여하는 롯데알미늄이 될
                    것입니다. 현재보다 더 나은 미래를 위해 계속 발전시켜 나갈 수 있도록 최선을 다하겠습니다.
                    {`\n\n`}
                    감사합니다.
                </motion.p>
                <motion.div className={'flex flex-col items-end'} variants={childTextVariants}>
                    <p className={'font-extrabold text-2xl mb-2'}>최연수</p>
                    <p className={'font-medium text-lg mb-6'}>롯데인프라셀 대표이사</p>
                    <Image src={CeoSignImage} alt={'Ceo sign'} width={168} height={44} />
                </motion.div>
            </motion.div>

            <motion.div
                variants={imageVariants}
                transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={'w-full md:order-2 order-1'}
            >
                <Image
                    src={CeoAvatar}
                    alt={'Avatar of CEO 최연수'}
                    width={680}
                    height={658}
                    className={'w-full'}
                    objectFit={'contain'}
                />
            </motion.div>
        </div>
    );
};

export default MessageFromCeo;

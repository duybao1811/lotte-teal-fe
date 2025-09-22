'use client';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import AluminumFoilBG from '@/assets/images/business/AluminumFoil.png';
import PrintingPackagingBG from '@/assets/images/business/PrintingPackaging.png';
import ResearchFieldsBG from '@/assets/images/business/ResearchFields..png';
import BgCan from '@/assets/images/business/Can.png';
import CorrugatedBoxBG from '@/assets/images/business/CorrugatedBox.png';
import HouseholdGoodsBG from '@/assets/images/business/HouseholdGoods.png';
import NewBusinessBG from '@/assets/images/business/NewBusiness.png';
import dynamic from 'next/dynamic';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const BusinessTabIndicator = dynamic(
  () => import('@/views/HomePageView/BusinessSection/components/BusinessTabIndicator'),
);
const BusinessTabs = dynamic(
  () => import('@/views/HomePageView/BusinessSection/components/BusinessTabs'),
);
const BusinessCarousel = dynamic(
  () => import('@/views/HomePageView/BusinessSection/components/BusinessCarousel'),
);
const BusinessCarouselScroll = dynamic(
  () => import('@/views/HomePageView/BusinessSection/components/BusinessCarouselScroll'),
);

const mockData = [
  {
    title: '알미늄박',
    description:
      '알미늄박 사업은 40년 이상 축적된 최고의 기술과 최첨단 설비로 각종 약식품 포장재, 전기전자 및 산업재용 등 다양한 알루미늄박 제품을 공급하고 있습니다.',
    image: AluminumFoilBG.src,
  },
  {
    title: '인쇄·포장',
    description:
      '단축되는 제품 사이클, 품질의 다변화에 대응하며, 방습 및 가공성이 뛰어나고 제품보호성 등이 우수한 포장재를 생산하여 고객의 만족도를 극대화하고 있습니다.',
    image: PrintingPackagingBG.src,
  },
  {
    title: '연구분야 소개',
    description:
      '"최고의 품질제공, 고부가가치 제품 개발"을 위해 롯데알미늄 연구소는 끊임없이 연구합니다.',
    image: ResearchFieldsBG.src,
  },
  {
    title: 'CAN',
    description:
      'CAN사업은 대표적인 음료용기인 스틸, 알루미늄 CAN을 생산하고 있으며 소재투입에서 제품의 포장까지 자동 시스템으로 제어되는 첨단 생산설비를 보유하고 있습니다.',
    image: BgCan.src,
  },
  {
    title: '골판지',
    description:
      '판지사업은 환경친화적이고 완충능력 및 내용물의 보존이 우수한 골판지 상자를 공급하고 있습니다.',
    image: CorrugatedBoxBG.src,
  },
  {
    title: '생활용품',
    description:
      '소비자들의 니즈에 맞춰 끊임없이 새로운 것을 추구하는 생활용품 전문 브랜드로 나아가고 있습니다.',
    image: HouseholdGoodsBG.src,
  },
  {
    title: '신규사업',
    description:
      '지속적인 성장을 위해 기존사업의 핵심역량을 기반으로 인접 영역의 신규사업을 적극적으로 추진하여 롯데알미늄의 미래 성장을 견인할 주력사업을 육성하고 있습니다.',
    image: NewBusinessBG.src,
  },
];

const extendData = [...mockData, ...mockData, ...mockData];
const BusinessSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const [itemActive, setItemActive] = useState(mockData.length);

  const isTablet = useMediaQuery('(max-width: 768px)');

  const handleTabClick = (index: number) => {
    const length = mockData.length;
    const round = Math.floor(itemActive / length);
    const indexMapping = round * length + index;
    setItemActive(indexMapping);
  };

  return (
    <div className="w-full" ref={sectionRef}>
      <div className="flex justify-between mb-12 max-w-content gap-8">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={'text-left'}
        >
          <h3 className="text-4.5xl font-extrabold md:whitespace-normal whitespace-pre-line">{`LOTTE \n ALUMINUM`}</h3>
          <h2 className="text-primary text-4.5xl font-extrabold">Businesses</h2>
        </motion.div>

        <motion.p
          className="whitespace-pre-line flex-1 flex justify-center text-lg"
          initial={{ x: 80, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          롯데알미늄은 알미늄박, 인쇄·포장, 캔, 골판지, 생활용품, 신규사업과 연구개발에 이르기까지
          {`\n`}다양한 산업 영역에서 축적된 노하우와 차별화된 기술력, 지속적인 혁신을 바탕으로
          {`\n`}고객의 삶을 더욱 편리하고 풍요롭게 만드는 솔루션을 제공합니다.
        </motion.p>
      </div>
      {isTablet ? (
        <>
          <BusinessTabIndicator
            quantity={mockData.length}
            activeIndex={itemActive % mockData.length}
          />
          <BusinessCarouselScroll data={mockData} />
        </>
      ) : (
        <>
          <BusinessTabs
            data={mockData}
            activeIndex={itemActive % mockData.length}
            onTabClick={(index) => handleTabClick(index)}
          />
          <BusinessCarousel data={extendData} activeIndex={itemActive} />
        </>
      )}
    </div>
  );
};

export default BusinessSection;

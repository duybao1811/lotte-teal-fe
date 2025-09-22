'use client';
import React, { useState } from 'react';
import HeadingSection from '@/components/HeadingSection/HeadingSection';
import SusManagementBg1 from '@/assets/images/sus-management/1.png';
import SusManagementBg2 from '@/assets/images/sus-management/2.png';
import SusManagementBg3 from '@/assets/images/sus-management/3.png';
import SusManagementBg4 from '@/assets/images/sus-management/4.png';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import SusManagementColumnMobile from '@/views/HomePageView/SusManagement/SusManagementColumnMobile';

const SusManagementBgAnimation = dynamic(
  () => import('@/views/HomePageView/SusManagement/SusManagementBgAnimation'),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 -z-1">
        <Image src={SusManagementBg1.src} alt="fallback" fill style={{ objectFit: 'cover' }} />
      </div>
    ),
  },
);

const SusManagementColumn = dynamic(
  () => import('@/views/HomePageView/SusManagement/SusManagementColumn'),
  {
    ssr: false,
  },
);

export const susManagementData = [
  {
    title: '환경경영',
    content: '자원 및 에너지 소비를 최소화하여\n' + '환경보전에 최선을 다합니다.',
    image: SusManagementBg1.src,
  },
  {
    title: '안전·품질경영',
    content: '가나다라가나다라가나다라가나다라\n' + '가나다라가나다라가나다라',
    image: SusManagementBg2.src,
  },
  {
    title: '윤리·준법경영',
    content: '가나다라가나다라가나다라가나다라가나다라가나다라',
    image: SusManagementBg3.src,
  },
  {
    title: '사회공헌 & 동반성장',
    content: '가나다라가나다라가나다라가나다라가나다라가나다라',
    image: SusManagementBg4.src,
  },
];

const SusManagement = () => {
  const [itemActive, setItemActive] = useState(-1);
  const isTablet = useMediaQuery('(max-width: 768px)');

  const handleMouseEnterColumn = (index: number) => {
    setItemActive(index);
  };

  return (
    <div>
      <HeadingSection
        title={'지속가능경영'}
        subTitle={'Sustainability Management'}
        content={
          '롯데알미늄은 경제, 사회, 환경 등 국내·외 모든 경영 활동에 대하여 이해관계자의 신뢰를 얻고 \n 미래 지향적인 경영전략을 수립하여 운영함으로써 지속가능한 성장을 추구하고 있습니다.'
        }
      />

      {isTablet ? (
        <div className={'w-full'}>
          <div className={'overflow-x-scroll scrollbar-hidden flex snap-x snap-mandatory'}>
            {susManagementData.map((item, index) => (
              <SusManagementColumnMobile
                key={index}
                image={item.image}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="relative flex items-center gap-[1px]">
          <SusManagementBgAnimation activeIndex={itemActive} />
          {susManagementData.map((item, index) => (
            <SusManagementColumn
              key={index}
              title={item.title}
              content={item.content}
              onMouseEnter={() => handleMouseEnterColumn(index)}
              onMouseLeave={() => setItemActive(-1)}
              active={index === itemActive}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SusManagement;

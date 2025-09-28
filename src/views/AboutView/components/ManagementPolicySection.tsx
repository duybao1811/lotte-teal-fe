import React from 'react';

import HeadingSection from '@/components/HeadingSection/HeadingSection';

import IconCoreStrength from '@/assets/icons/ic_corestrength.svg';
import IconTransparency from '@/assets/icons/ic_transparency.svg';
import IconLocation from '@/assets/icons/ic_location.svg';
import IconGlobal from '@/assets/icons/ic_global.svg';
import PolicyCard from '@/views/AboutView/components/PolicyCard';
import clsx from 'clsx';

const data = [
  {
    title: '핵심역량 강화',
    icon: IconCoreStrength,
    width: 51,
    height: 35,
    content: [
      '가장 잘 할 수 있는 주력 사업 분야에 역량을 집중합니다.',
      '롯데만의 차별적 가치 제공 및 시너지 창출이 가능한 연관사업을 확장합니다.',
    ],
  },
  {
    title: '현장경영',
    icon: IconLocation,
    width: 48,
    height: 48,
    content: [
      '고객, 임직원, 협력업체와의 직접적 접촉을 통한 현상 파악 및 의견을 수렴합니다.',
      '현장의 아이디어들을 신속하게 경영전략에 반영합니다.',
    ],
  },
  {
    title: '투명경영',
    icon: IconTransparency,
    width: 42,
    height: 56,
    content: [
      '투명한 기준에 따른 경영활동을 통해 신뢰를 제공합니다.',
      '공정하고 합리적인 인사제도로 임직원 전원이 경영목표 달성에 기여하도록 동기를 부여합니다.',
    ],
  },
  {
    title: '가치경영',
    icon: IconGlobal,
    width: 56,
    height: 56,
    content: [
      '차별적 제품 / 서비스 제공으로 본원적 브랜드 가치를 제공합니다.',
      '글로벌 시장을 선도하는 대표 브랜드를 육성합니다.',
    ],
  },
];

const ManagementPolicySection = () => {
  return (
    <section className="max-w-content mx-auto">
      <HeadingSection title="경영 방침" />

      <div className="md:border md:border-text-secondary md:rounded-2xl grid md:grid-cols-2 md:px-20 md:py-12 md:gap-0 gap-8">
        {data.map((item, index) => {
          const isTopRow = index < 2;
          const isLeftCol = index % 2 === 0;
          return (
            <PolicyCard
              key={item.title}
              item={item}
              className={clsx(
                !isLeftCol && 'md:border-l',
                !isTopRow && 'md:border-t',
                isTopRow ? 'md:pb-10' : 'md:pt-10',
              )}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ManagementPolicySection;

import React from 'react';
import HeadingSection from '@/components/HeadingSection/HeadingSection';
import CoreValueOriginality from '@/assets/images/about/core_value_originality.webp';
import CoreValueChallenge from '@/assets/images/about/core_value_challenge.webp';
import CoreValueRespect from '@/assets/images/about/core_value_respect.webp';
import CoreValueCard from '@/views/AboutView/components/CoreValues/CoreValueCard';

const data = [
  {
    title: 'Originality',
    content:
      '우리는 변화에 민첩하게 대응하고,\n 경계를 뛰어넘는 협업과\n 틀을 깨는 혁신을 통해\n 쉽게 모방할 수 없는 독창성을 만든다.',
    image: CoreValueOriginality.src,
  },
  {
    title: 'challenge',
    content:
      '우리는 업무의 본질에 집중하며\n 끊임없는 도전을 통해 더 높은\n 수준의 목표를 달성해 나간다.',
    image: CoreValueChallenge.src,
  },
  {
    title: 'respect',
    content:
      '우리는 다양한 의견을 존중하며\n 소통하고, 원칙 준수함으로써\n 신뢰에 기반한 공동체를 지향한다.',
    image: CoreValueRespect.src,
  },
];

const CoreValues = () => {
  return (
    <div className={'max-w-content !px-0'}>
      <HeadingSection title={'CORE VALUES'} />
      <div
        className={
          'lg:px-0 px-10 flex md:gap-20 gap-10 overflow-x-scroll scrollbar-hidden snap-mandatory snap-x'
        }
      >
        {data.map((item) => (
          <CoreValueCard
            key={item.title}
            title={item.title}
            content={item.content}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CoreValues;

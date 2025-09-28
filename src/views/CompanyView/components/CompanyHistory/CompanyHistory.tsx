import React from 'react';
import HeadingSection from '@/components/HeadingSection/HeadingSection';
import Tabs from '@/components/Tabs/Tabs';
import Timeline from '@/views/CompanyView/components/CompanyHistory/Timeline';
import LotteUsa from '@/assets/images/factory/lotte_aluminum_usa.png';
import LottePackaging from '@/assets/images/factory/lotte_packaging.png';

const tabs = [
  {
    label: '2020’S',
    content: <div></div>,
  },
  {
    label: '2010’S',
    content: <div></div>,
  },
  {
    label: '2010’S',
    content: <div></div>,
  },
  {
    label: '2000’S',
    content: <div></div>,
  },
  {
    label: '1990’S',
    content: <div></div>,
  },
  {
    label: '1960’S~1980’S',
    content: <div></div>,
  },
];

const events = [
  { year: '2021', events: ['미국법인 설립 (미국알미늄머티리얼즈USA)'], image: LotteUsa.src },
  {
    year: '2022',
    events: ['금천롯데타워 신사옥 준공 및 이전', '헝가리 공장 준공'],
    image: LottePackaging.src,
  },
  { year: '2023', events: ['ASI 인증', '헝가리 투자 승인 및 설명회'], image: LotteUsa.src },
];

const CompanyHistory = () => {
  return (
    <div className={'max-w-content'}>
      <HeadingSection title={'연혁'} />
      <Tabs tabs={tabs} />
      <div className={'mt-20'}>
        <Timeline events={events} />
      </div>
    </div>
  );
};

export default CompanyHistory;

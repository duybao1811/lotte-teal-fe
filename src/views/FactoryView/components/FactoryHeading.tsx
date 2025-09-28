import React from 'react';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';

const FactoryHeading = () => {
  return (
    <div className={'max-w-content'}>
      <p className={'font-extrabold text-2xl text-gray2 mb-6'}>사업장 안내</p>
      <h1 className={'md:text-56 text-4.5xl md:whitespace-pre-line mb-15'}>
        롯데알미늄은 국내뿐만 아니라 아시아, 북미, 유럽 등 전 세계 주요
        {`\n`}
        거점을 기반으로 <span className={'font-extrabold'}>다양한 글로벌 고객과 함께 성장</span>하고
        있습니다.
      </h1>
      <Breadcrumb
        items={[
          { label: '회사소개', href: '/' },
          { label: '사업장 안내', href: '/' },
        ]}
      />
    </div>
  );
};

export default FactoryHeading;

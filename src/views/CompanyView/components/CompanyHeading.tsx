import React from 'react';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';

const CompanyHeading = () => {
  return (
    <div className={'max-w-content'}>
      <p className={'font-extrabold text-2xl text-gray2 mb-6'}>사업장 안내</p>
      <h1 className={'md:text-56 text-4.5xl md:whitespace-pre-line mb-15'}>
        롯데알미늄은 첨단 기술과 품질을 바탕으로
        {`\n`}
        <span className={'font-extrabold'}>생산 역량을 지속적으로 성장</span>시켜가고 있습니다.
      </h1>
      <Breadcrumb
        items={[
          { label: '회사소개', href: '/' },
          { label: '기업정보', href: '/' },
        ]}
      />
    </div>
  );
};

export default CompanyHeading;

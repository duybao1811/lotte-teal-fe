'use client';
import React, { useState } from 'react';
import clsx from 'clsx';
import FinancialTable from '@/views/CompanyView/components/FinancialInformation/FinancialTable';
import dynamic from 'next/dynamic';

const CustomBarChart = dynamic(
  () => import('@/views/CompanyView/components/FinancialInformation/CustomBarChart'),
);

const FinancialReport = () => {
  const [tabSelected, setTabSelected] = useState(0);

  const tabs = ['연결', '개별'];

  return (
    <div className={'space-y-24'}>
      <div className={'w-full mx-auto max-w-[560px] h-[60px] flex'}>
        {tabs.map((item, index) => (
          <div
            key={item}
            className={clsx(
              'cursor-pointer flex-1 flex items-center justify-center',
              index === tabSelected ? 'bg-primary text-white ' : 'border border-gray3',
            )}
            onClick={() => setTabSelected(index)}
          >
            <p className={'font-medium text-2.5xl'}>{item}</p>
          </div>
        ))}
      </div>
      <div className={'grid md:grid-cols-3 sm:grid-cols-2 gap-10 gap-y-20'}>
        <CustomBarChart title={'매출액'} subTitle={'(단위 : 백만원)'} />
        <CustomBarChart title={'영업이익'} subTitle={'(단위 : 백만원)'} />
        <CustomBarChart title={'부채비율'} subTitle={'(단위 : %)'} />
      </div>
      <FinancialTable
        title={'요약 연결 손익계산서'}
        subTitle={'(단위 : 백만원)'}
        headers={['구분', '2022', '2023', '2024']}
        data={[
          ['매출액', '1,633,779', '1,633,779', '1,633,779'],
          ['영업이익', '18,530', '-42,643', '-3,455'],
          ['법인세비용차감전 순이익', '1,633,779', '1,633,779', '1,633,779'],
          ['당기순이익', '1,633,779', '1,633,779', '1,633,779'],
        ]}
      />
      <FinancialTable
        title={'요약 연결 재무상태표'}
        subTitle={'(단위 : 백만원)'}
        headers={['구분', '2021', '2022', '2023']}
        data={[
          ['자산총계', '1,633,779', '1,633,779', '1,633,779'],
          ['부채총계', '18,530', '-42,643', '-3,455'],
          ['자본총계', '1,633,779', '1,633,779', '1,633,779'],
          ['부채비율', '1,633,779', '1,633,779', '1,633,779'],
        ]}
      />
    </div>
  );
};

export default FinancialReport;

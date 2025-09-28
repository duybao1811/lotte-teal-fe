import React from 'react';
import HeadingSection from '@/components/HeadingSection/HeadingSection';
import FinancialReport from '@/views/CompanyView/components/FinancialInformation/FinancialReport';
import Tabs from '@/components/Tabs/Tabs';

const tabs = [
  {
    label: '재무제표',
    content: <FinancialReport />,
  },
  {
    label: '전자공시',
    content: <FinancialReport />,
  },
];

const FinancialInformation = () => {
  return (
    <div className={'max-w-content'}>
      <HeadingSection title={'재무정보'} />
      <Tabs tabs={tabs} />
    </div>
  );
};

export default FinancialInformation;

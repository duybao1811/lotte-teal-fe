import React from 'react';
import HeadingSection from '@/components/HeadingSection/HeadingSection';
import LocalFactory from '@/views/FactoryView/components/LocalFactory/LocalFactory';
import ForeignCompany from '@/views/FactoryView/components/ForeignCompany/ForeignCompany';
import Tabs from '@/components/Tabs/Tabs';

const FactoryTabs = () => {
  const tabs = [
    { label: '국내 공장', content: <LocalFactory /> },
    { label: '해외 공장', content: <ForeignCompany /> },
  ];
  return (
    <div>
      <HeadingSection title={'공장 소개'} />
      <Tabs tabs={tabs} tabClassName={'max-w-content'} />
    </div>
  );
};

export default FactoryTabs;

import React from 'react';
import FactoryHeading from '@/views/FactoryView/components/FactoryHeading';
import Banner from '@/views/FactoryView/components/Banner';
import FactoryTabs from '@/views/FactoryView/components/FactoryTabs';

const FactoryView = () => {
  return (
    <div className={'md:space-y-28 space-y-15 md:mb-28 mb-15'}>
      <Banner />
      <div>
        <div className={'mb-15'}>
          <FactoryHeading />
        </div>
        <FactoryTabs />
      </div>
    </div>
  );
};

export default FactoryView;

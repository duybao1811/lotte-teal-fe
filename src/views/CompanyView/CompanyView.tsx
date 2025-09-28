import React from 'react';
import Banner from '@/views/CompanyView/components/Banner';
import CompanyHeading from '@/views/CompanyView/components/CompanyHeading';
import CompanyTabs, { TabKey } from '@/views/CompanyView/components/CompanyTabs';

interface Props {
  subPage?: TabKey;
}

const CompanyView = ({ subPage = 'history' }: Props) => {
  return (
    <div className="md:space-y-28 space-y-15 md:mb-28 mb-15">
      <Banner />
      <CompanyHeading />
      <CompanyTabs defaultTab={subPage} />
    </div>
  );
};

export default CompanyView;

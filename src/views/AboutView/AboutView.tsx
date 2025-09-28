import React from 'react';
import Banner from '@/views/AboutView/components/Banner';
import AboutLotteSection from '@/views/AboutView/components/AboutLotteSection';
import CoreValues from '@/views/AboutView/components/CoreValues/CoreValues';
import LotteVision from '@/views/AboutView/components/LotteVision/LotteVision';
import MessageFromCeo from '@/views/AboutView/components/MessageFromCeo';
import ManagementPolicySection from '@/views/AboutView/components/ManagementPolicySection';

const AboutView = () => {
  return (
    <div className={'md:space-y-28 space-y-15 md:mb-28 mb-15'}>
      <Banner />
      <AboutLotteSection />
      <MessageFromCeo />
      <LotteVision />
      <CoreValues />
      <ManagementPolicySection />
    </div>
  );
};

export default AboutView;

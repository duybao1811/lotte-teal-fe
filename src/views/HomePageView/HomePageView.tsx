import React from 'react';
import Banner from '@/views/HomePageView/Banner/Banner';
import BusinessSection from '@/views/HomePageView/BusinessSection/BusinessSection';
import NewsRoom from '@/views/HomePageView/NewsRoomSection/NewsRoom';
import SusManagement from '@/views/HomePageView/SusManagement/SusManagement';
import AboutSection from '@/views/HomePageView/AboutSection/AboutSection';

const HomePageView = () => {
  return (
    <div className={'space-y-24 mb-20'}>
      <div>
        <Banner />
        <AboutSection />
      </div>
      <BusinessSection />
      <SusManagement />
      <NewsRoom />
    </div>
  );
};

export default HomePageView;

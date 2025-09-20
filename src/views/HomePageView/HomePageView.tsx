import React from 'react';
import Banner from '@/views/HomePageView/Banner/Banner';
import BusinessSection from '@/views/HomePageView/BusinessSection/BusinessSection';
import NewsRoom from '@/views/HomePageView/NewsRoomSection/NewsRoom';
import SusManagement from '@/views/HomePageView/SusManagement/SusManagement';

const HomePageView = () => {
  return (
    <div className={'flex flex-col gap-24 mb-20'}>
      <Banner />
      <BusinessSection />
      <SusManagement />
      <NewsRoom />
    </div>
  );
};

export default HomePageView;

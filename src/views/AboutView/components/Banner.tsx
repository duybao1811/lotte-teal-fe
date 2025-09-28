import React from 'react';
import BannerItem from '@/views/HomePageView/Banner/BannerItem';
import AboutBanner from '@/assets/images/about/about_banner.webp';
import ScrollDownIcon from '@/components/ScrollDownIcon/ScrollDownIcon';

const Banner = () => {
  return (
    <div className="relative overflow-hidden md:h-[90vh] h-[80vh]">
      <BannerItem image={AboutBanner.src} title={'About\n LOTTE ALUMINIUM'} priority />
      <ScrollDownIcon />
    </div>
  );
};

export default Banner;

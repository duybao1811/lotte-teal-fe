import React from 'react';
import BannerItem from '@/views/HomePageView/Banner/BannerItem';
import BannerImg from '@/assets/images/company/banner.webp';
import BannerMbImg from '@/assets/images/company/banner_mb.webp';
import ScrollDownIcon from '@/components/ScrollDownIcon/ScrollDownIcon';

const Banner = () => {
  return (
    <div className="relative overflow-hidden md:h-[90vh] h-[80vh]">
      <BannerItem
        image={BannerImg.src}
        mbImage={BannerMbImg.src}
        title={'LOTTE ALUMINIUM\n Company Information'}
        priority
      />
      <ScrollDownIcon />
    </div>
  );
};

export default Banner;

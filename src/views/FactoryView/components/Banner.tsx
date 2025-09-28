import React from 'react';
import BannerItem from '@/views/HomePageView/Banner/BannerItem';
import FactoryBanner from '@/assets/images/factory/banner.webp';
import FactoryBannerMb from '@/assets/images/factory/banner_mb.webp';
import ScrollDownIcon from '@/components/ScrollDownIcon/ScrollDownIcon';

const Banner = () => {
  return (
    <div className="relative overflow-hidden md:h-[90vh] h-[80vh]">
      <BannerItem
        image={FactoryBanner.src}
        mbImage={FactoryBannerMb.src}
        title={'LOTTE ALUMINIUM\n Factory'}
        priority
      />
      <ScrollDownIcon />
    </div>
  );
};

export default Banner;

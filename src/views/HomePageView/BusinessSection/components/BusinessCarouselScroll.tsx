'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import BusinessSectionCard from './BusinessSectionCard';

interface Props {
  data: { title: string; description: string; image: string }[];
  activeIndex: number;
  spaceBetween?: number;
}

const BusinessCarouselSwiper = ({ data, spaceBetween = 96 }: Props) => {
  return (
    <Swiper
      modules={[EffectCoverflow]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      loop={true}
      spaceBetween={spaceBetween}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index} style={{ width: 'auto' }} className="py-[40px] sm:py-[64px]">
          {({ isActive }) => (
            <div>
              <BusinessSectionCard {...item} active={isActive} disableScaleAnimation />
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BusinessCarouselSwiper;

'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Banner1 from '@/assets/images/banner/banner1.webp';
import Banner1Mb from '@/assets/images/banner/banner1_mb.webp';
import Banner2 from '@/assets/images/banner/banner2.webp';
import Banner2Mb from '@/assets/images/banner/banner2_mb.webp';
import BannerItem from '@/views/HomePageView/Banner/BannerItem';
import ScrollDownIcon from '@/components/ScrollDownIcon/ScrollDownIcon';

const sectionsContent = [
  {
    id: 1,
    title: 'GREEN COMPANY',
    description: '사람과 환경을 존중하는 롯데 알미늄은 \n 지속가능경영을 실천합니다.',
    image: Banner1.src,
    imageMb: Banner1Mb.src,
  },
  {
    id: 2,
    title: '글로벌 신소재 기업',
    description: '대한민국을 넘어 아시아를 선도하는 기업으로 \n 롯데알미늄이 도전합니다.',
    image: Banner2.src,
    imageMb: Banner2Mb.src,
  },
  {
    id: 3,
    title: 'GREEN COMPANY',
    description: '사람과 환경을 존중하는 롯데 알미늄은 \n 지속가능경영을 실천합니다.',
    image: Banner1.src,
    imageMb: Banner1Mb.src,
  },
  {
    id: 4,
    title: '글로벌 신소재 기업',
    description: '대한민국을 넘어 아시아를 선도하는 기업으로 \n 롯데알미늄이 도전합니다.',
    image: Banner2.src,
    imageMb: Banner2Mb.src,
  },
];

export default function PageSections() {
  return (
    <div className="relative overflow-hidden md:h-[90vh] h-[80vh]">
      <Swiper
        direction={'vertical'}
        speed={1000}
        modules={[Autoplay, Pagination, Mousewheel]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        mousewheel={{
          releaseOnEdges: true,
        }}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        onSwiper={(swiper) => {
          const toggleMousewheel = () => {
            if (window.scrollY === 0) {
              swiper.mousewheel.enable();
            } else {
              swiper.mousewheel.disable();
            }
          };
          toggleMousewheel();
          window.addEventListener('scroll', toggleMousewheel);

          swiper.on('destroy', () => {
            window.removeEventListener('scroll', toggleMousewheel);
          });
        }}
        className="w-full h-full"
      >
        {sectionsContent.map((section, index) => (
          <SwiperSlide key={section.id}>
            <BannerItem
              title={section.title}
              description={section.description}
              image={section.image}
              priority={index === 0}
              mbImage={section.imageMb}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination absolute top-1/2 right-10 -translate-y-1/2 flex flex-col gap-3 z-10"></div>
      <ScrollDownIcon />
    </div>
  );
}

import React from 'react';
import HeadingSection from '@/components/HeadingSection/HeadingSection';
import NewsRoomCard from '@/views/HomePageView/NewsRoomSection/NewsRoomCard';
import BgNewsRoom1 from '@/assets/images/newsroom/1.png';
import BgNewsRoom2 from '@/assets/images/newsroom/2.png';
import BgNewsRoom3 from '@/assets/images/newsroom/3.png';
import BgNewsRoom4 from '@/assets/images/newsroom/4.png';
import clsx from 'clsx';

const newsData = [
  {
    id: 1,
    imageSrc: BgNewsRoom1.src,
    category: '뉴스',
    date: '2024.11.22',
    title: '롯데알미늄, 금천구 ‘사랑의 김장 나눔’ 봉사',
    bodyText: '롯데알미늄이 서울 금천구 소외 계층을 위해 ‘사랑의 김장 나눔 행사’를 진행했다.',
  },
  {
    id: 2,
    imageSrc: BgNewsRoom2.src,
    category: '공지사항',
    date: '2024.11.20',
    title: '새로운 롯데알미늄 제품 출시 안내',
    bodyText:
      '친환경 소재를 활용한 신제품 라인업을 공개합니다. 지속 가능한 미래를 위한 롯데알미늄의 새로운 도전!',
  },
  {
    id: 3,
    imageSrc: BgNewsRoom3.src,
    category: '기업문화',
    date: '2024.11.18',
    title: '임직원 워크숍 성황리 종료',
    bodyText:
      '팀워크 향상과 소통 강화를 위한 2024년 임직원 워크숍이 성공적으로 마무리되었습니다. 즐거웠던 현장 소식을 전해드립니다.',
  },
  {
    id: 4,
    imageSrc: BgNewsRoom4.src,
    category: '사회공헌',
    date: '2024.11.15',
    title: '사랑의 연탄 나눔 봉사활동',
    bodyText:
      '롯데알미늄 임직원들이 따뜻한 겨울을 위해 연탄 나눔 봉사에 나섰습니다. 지역사회와 함께하는 따뜻한 나눔의 현장.',
  },
];

const NewsRoom = () => {
  return (
    <div className={'w-full max-w-content !px-0'}>
      <HeadingSection
        title={'NEWSROOM'}
        subTitle={'알미늄 기사 자료'}
        content={'롯데알미늄의 최신 소식을 전해드립니다.'}
        className={'!mb-6'}
      />
      <div
        className={clsx(
          'flex gap-8 overflow-x-scroll overflow-y-visible scrollbar-hidden',
          'snap-x snap-mandatory snap-always py-10 px-8',
        )}
      >
        {/*Spacer for first item centering on mobile*/}
        <div className={'min-w-[280px] sm:hidden block'} />
        {newsData.map((item) => (
          <NewsRoomCard
            imageSrc={item.imageSrc}
            category={item.category}
            date={item.date}
            title={item.title}
            bodyText={item.bodyText}
            key={item.id}
          />
        ))}
        {/*Spacer for last item centering on mobile*/}
        <div className={'min-w-[280px] sm:hidden block'} />
      </div>
    </div>
  );
};

export default NewsRoom;

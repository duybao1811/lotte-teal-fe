import React from 'react';
import LotteBuilding from '@/assets/images/about/lotte_building.webp';
import AnSan1 from '@/assets/images/factory/ansan1.png';
import FactoryThumbnailCard from '@/views/FactoryView/components/FactoryThumbnailCard';
import FactoryDetailSection from '@/views/FactoryView/components/FactoryDetailSection';
import AnSan2 from '@/assets/images/factory/ansan2.png';
import Jincheon from '@/assets/images/factory/Jincheon.png';
import Pyeongtaek from '@/assets/images/factory/Pyeongtaek.png';
import Osan from '@/assets/images/factory/Osan.png';
import Incheon from '@/assets/images/factory/Incheon.png';
import HouseHoldItems from '@/assets/images/factory/household_items.png';

const dataOverview = [
  {
    title: '롯데 알미늄 본사',
    image: LotteBuilding.src,
  },
  {
    title: '안산1공장 및 연구소',
    image: AnSan1.src,
  },
];

const footerData = [
  {
    title: '안산2공장',
    image: AnSan2.src,
  },
  {
    title: '진천공장',
    image: Jincheon.src,
  },
  {
    title: '평택공장',
    image: Pyeongtaek.src,
  },
  {
    title: '오산공장',
    image: Osan.src,
  },
  {
    title: '인천공장',
    image: Incheon.src,
  },
  {
    title: '생활용품',
    image: HouseHoldItems.src,
  },
];

const detailInfo = {
  image: LotteBuilding.src,
  companyName: '롯데알미늄 본사',
  department: '영업 기획 / 관리',
  address: '금천구 벚꽃로 104, 11~18층 (독산동 금천 롯데타워)',
  phone: '02-801-8000',
  fax: '02-6234-2055',
};

const LocalFactory = () => {
  return (
    <div className={'space-y-20'}>
      <div className={'grid grid-cols-2 md:gap-10 gap-8 max-w-content'}>
        {dataOverview.map((item, index) => (
          <FactoryThumbnailCard title={item.title} image={item.image} key={index} />
        ))}
      </div>
      <FactoryDetailSection
        companyName={detailInfo.companyName}
        department={detailInfo.department}
        image={detailInfo.image}
        address={detailInfo.address}
        faxNumber={detailInfo.fax}
        phoneNumber={detailInfo.phone}
      />
      <div className={'grid grid-cols-2 md:gap-x-10 gap-x-8 md:gap-y-20 gap-y-15 max-w-content'}>
        {footerData.map((item, index) => (
          <FactoryThumbnailCard title={item.title} image={item.image} key={index} />
        ))}
      </div>
    </div>
  );
};

export default LocalFactory;

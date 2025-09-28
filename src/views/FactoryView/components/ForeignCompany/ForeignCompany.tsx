import React from 'react';
import LotteAluminum from '@/assets/images/factory/lotte_aluminum.png';
import LottePackaging from '@/assets/images/factory/lotte_packaging.png';
import FactoryThumbnailCard from '@/views/FactoryView/components/FactoryThumbnailCard';
import FactoryDetailSection from '@/views/FactoryView/components/FactoryDetailSection';
import LotteAluminumUsa from '@/assets/images/factory/lotte_aluminum_usa.png';

const dataOverview = [
  {
    title: 'PT. LOTTE `Packaging`',
    image: LottePackaging.src,
  },
  {
    title: 'LOTTE Aluminium Hungary KFT',
    image: LotteAluminum.src,
  },
];

const footerData = [
  {
    title: 'LOTTE Aluminium USA Corporation',
    image: LotteAluminumUsa.src,
  },
];

const detailInfo = {
  image: LottePackaging.src,
  companyName: 'PT. LOTTE Packaging',
  address: '인도네시아 Curug',
  phone: '62-21-598-1256',
  fax: '62-21-598-1258',
  mainProducts: 'OPP Film',
};

const ForeignFactory = () => {
  return (
    <div className={'space-y-20'}>
      <div className={'grid grid-cols-2 md:gap-10 gap-8 max-w-content'}>
        {dataOverview.map((item, index) => (
          <FactoryThumbnailCard title={item.title} image={item.image} key={index} />
        ))}
      </div>
      <FactoryDetailSection
        companyName={detailInfo.companyName}
        image={detailInfo.image}
        address={detailInfo.address}
        faxNumber={detailInfo.fax}
        phoneNumber={detailInfo.phone}
        mainProducts={detailInfo.mainProducts}
      />
      <div className={'grid grid-cols-2 gap-x-10 gap-y-20 max-w-content'}>
        {footerData.map((item, index) => (
          <FactoryThumbnailCard title={item.title} image={item.image} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ForeignFactory;

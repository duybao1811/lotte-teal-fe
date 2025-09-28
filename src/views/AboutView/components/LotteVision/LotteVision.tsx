import React from 'react';
import Image from 'next/image';
import VisionBackground from '@/assets/images/about/vision_bg.png';
import LotteVisionImg from '@/assets/images/about/lotte_vision.svg';
import HeadingSection from '@/components/HeadingSection/HeadingSection';

const LotteVision = () => {
  return (
    <div className={'w-full py-20 flex flex-col items-center relative'}>
      <Image
        src={VisionBackground}
        alt={'Vision background'}
        fill
        className={'absolute -z-1 inset-0'}
      />
      <div className={'flex items-center justify-center gap-3 mb-5'}>
        <div className={'h-4 w-[1.5px] bg-primary'} />
        <h6 className={'text-primary text-0.5xl font-extrabold'}>OUR VISION</h6>
        <div className={'h-4 w-[1.5px] bg-primary'} />
      </div>
      <HeadingSection title={'Global Leading\n Material Solution Creator'} />
      <Image src={LotteVisionImg} alt={'Lotte Vision'} width={1176} height={465} />
    </div>
  );
};

export default LotteVision;

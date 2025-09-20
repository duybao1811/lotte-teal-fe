import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import Image from 'next/image';
import { susManagementData } from '@/views/HomePageView/SusManagement/SusManagement';
import SusManagementBg1 from '@/assets/images/sus-management/1.png';

interface Props {
  activeIndex?: number;
}

const SusManagementBgAnimation = ({ activeIndex }: Props) => {
  const [previousBg, setPreviousBg] = useState(SusManagementBg1.src);

  const getClipPath = (index: number, active: boolean) => {
    // Calculate the center percentage of each column
    const columnCenterPercentage =
      (index / susManagementData.length) * 100 + 100 / susManagementData.length / 2;
    return active
      ? 'inset(0 0% 0 0)'
      : `inset(0 ${100 - columnCenterPercentage}% 0 ${columnCenterPercentage}%)`;
  };

  return (
    <>
      <div className="absolute inset-0 -z-1">
        <Image src={previousBg} alt="bg" fill style={{ objectFit: 'cover' }} />
      </div>
      <AnimatePresence mode="sync">
        {susManagementData.map((item, index) => {
          const active = index === activeIndex;
          return (
            <motion.div
              key={`bg-image-${index}`}
              className={clsx('absolute inset-0 w-full overflow-hidden')}
              style={{ zIndex: active ? 1 : 0, clipPath: getClipPath(index, active) }}
              variants={{
                inactive: {
                  clipPath: getClipPath(index, false),
                  transition: { duration: 0.1, ease: 'easeInOut', delay: 1.6 },
                },
                active: {
                  clipPath: 'inset(0 0% 0 0)',
                  transition: { duration: 0.8, ease: 'easeInOut', delay: 0.8 },
                },
              }}
              onAnimationComplete={() => {
                if (active) {
                  setPreviousBg(item.image);
                }
              }}
              initial={false}
              animate={active ? 'active' : 'inactive'}
            >
              <Image src={item.image} alt="bg" fill style={{ objectFit: 'cover' }} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </>
  );
};

export default SusManagementBgAnimation;

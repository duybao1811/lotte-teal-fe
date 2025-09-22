import { motion } from 'motion/react';
import React from 'react';

interface Props {
  quantity: number;
  activeIndex: number;
}

const BusinessTabIndicator = ({ quantity, activeIndex }: Props) => {
  return (
    <div className={'flex items-center justify-center gap-2 mb-8'}>
      {Array.from({ length: quantity }).map((_, index) => (
        <motion.div
          key={index}
          className={`
                        h-[12px] rounded-full transition-colors duration-300
                        ${index === activeIndex ? 'bg-primary' : 'bg-gray2'}
                    `}
          initial={{ width: 12 }} // w-2
          animate={{ width: index === activeIndex ? 28 : 12 }} // w-6 or w-2
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      ))}
    </div>
  );
};

export default BusinessTabIndicator;

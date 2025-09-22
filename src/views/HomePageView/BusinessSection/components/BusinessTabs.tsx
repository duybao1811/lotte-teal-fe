'use client';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import React from 'react';

type BusinessTabsProps = {
  data: { title: string }[];
  activeIndex: number;
  onTabClick: (index: number) => void;
};

const BusinessTabs = ({ data, activeIndex, onTabClick }: BusinessTabsProps) => {
  return (
    <div className={'mb-16 max-w-content md:block hidden'}>
      <div className="flex items-center justify-evenly rounded-full bg-[#E5E5E5]">
        {data.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.div
              key={index}
              onMouseEnter={() => onTabClick(index)}
              className={clsx(
                'relative cursor-pointer py-4 text-center font-medium text-gray text-lg',
                {
                  'text-primary !font-bold': isActive,
                },
              )}
            >
              {item.title}
              {isActive && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(BusinessTabs);

'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface TabsProps {
  tabs: { label: string; content: React.ReactNode }[];
  tabClassName?: string;
}

const Tabs = ({ tabs, tabClassName }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div
        className={clsx(
          'flex items-center mb-[3.75rem] overflow-x-auto scrollbar-hidden',
          tabClassName,
        )}
      >
        {tabs.map((tab, index) => (
          <motion.div
            key={index}
            className={clsx(
              'cursor-pointer flex-1 text-center font-extrabold text-2xl relative border-b border-gray3 py-2.5 px-10',
              index === activeIndex ? 'text-primary' : 'text-gray',
            )}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
            {index === activeIndex && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
        ))}
      </div>
      {tabs[activeIndex].content}
    </div>
  );
};

export default Tabs;

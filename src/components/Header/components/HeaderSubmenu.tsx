'use client';
import React from 'react';
import { motion } from 'motion/react';
import { getMenuData } from '@/components/Header/Header';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

const DropdownColumn = dynamic(() => import('@/components/Header/components/DropdownColumn'), {
  ssr: false,
});

interface Props {
  open: boolean;
  onMouseLeave: () => void;
  onHoverColumn: (index: number) => void;
  onClose: () => void;
  activeIndex: number;
  width: number;
  left: number;
}

const dropdownVariants = {
  inactive: { height: 0, opacity: 0 },
  active: { height: 600, opacity: 1 },
};

const HeaderSubmenu = ({
  onClose,
  open,
  onMouseLeave,
  width,
  left,
  activeIndex,
  onHoverColumn,
}: Props) => {
  const t = useTranslations('header');

  return (
    <motion.div
      className="absolute top-full left-0 right-0 bg-white overflow-hidden border-t border-stroke"
      variants={dropdownVariants}
      initial="inactive"
      animate={open ? 'active' : 'inactive'}
      onMouseLeave={onMouseLeave}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <div style={{ width: width, marginLeft: left }}>
        <ul className="grid grid-cols-6 font-medium text-black border-l border-stroke">
          {getMenuData(t).map((item, index) => (
            <DropdownColumn
              key={item.title}
              item={item}
              index={index}
              activeIndex={activeIndex}
              onHover={onHoverColumn}
              onClose={onClose}
            />
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default HeaderSubmenu;

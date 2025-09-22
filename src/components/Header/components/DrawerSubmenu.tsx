'use client';
import React from 'react';
import Drawer from '@/components/Drawer/Drawer';
import Logo from '@/assets/logo.svg';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { data } from '@/components/Header/Header';
import Collapse from '@/components/Collapse/Collapse';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface Props {
  open: boolean;
  onClose: () => void;
}

const DrawerSubmenu = ({ open, onClose }: Props) => {
  const t = useTranslations('header');

  return (
    <Drawer isOpen={open} onClose={onClose}>
      <div className={'px-8 py-8'}>
        <div className={'flex items-center justify-between mb-16'}>
          <Image src={Logo} alt={'Logo'} width={240} height={40} />
          <div onClick={onClose} className={'text-text-primary'}>
            <IoClose size={24} />
          </div>
        </div>

        <div className={'flex flex-col gap-8 mt-8'}>
          {data(t).map((item) => (
            <Collapse
              key={item.title}
              title={<p className={'text-2.5xl font-bold text-text-primary'}>{item.title}</p>}
            >
              <div className={'pl-6 flex flex-col gap-8 mt-8'}>
                {item?.subMenu?.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href || '/'}
                    className={'font-bold text-xl text-text-secondary'}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            </Collapse>
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default DrawerSubmenu;

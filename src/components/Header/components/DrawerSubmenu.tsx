'use client';
import React from 'react';
import Drawer from '@/components/Drawer/Drawer';
import Logo from '@/assets/logo.svg';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { getMenuData } from '@/components/Header/Header';
import Collapse from '@/components/Collapse/Collapse';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

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
          {getMenuData(t).map((item) => (
            <Collapse
              key={item.title}
              title={<p className={'text-2.5xl font-bold text-text-primary'}>{item.title}</p>}
            >
              <ul className={'pl-2 space-y-8 mt-4'}>
                {item?.subMenu?.map((subItem) => (
                  <div key={subItem.title}>
                    <Link
                      onClick={onClose}
                      href={subItem?.href || '/'}
                      className={'font-medium text-xl text-text-primary'}
                    >
                      {subItem.title}
                    </Link>

                    <ul className={'space-y-4 mt-4 pl-5'}>
                      {subItem?.subMenu?.map((subSubItem) => (
                        <li key={subSubItem.title}>
                          <Link
                            onClick={onClose}
                            href={subSubItem.href || '/'}
                            className="font-medium text-gray cursor-pointer hover:underline"
                          >
                            {subSubItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </ul>
            </Collapse>
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default DrawerSubmenu;

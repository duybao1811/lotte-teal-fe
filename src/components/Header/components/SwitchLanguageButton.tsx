'use client';
import React from 'react';
import { useLocale } from 'next-intl';
import useChangeLanguage from '@/hooks/useChangeLanguage';
import { IoGlobeOutline } from 'react-icons/io5';

const SwitchLanguageButton = () => {
  const locale = useLocale();

  const { switchLanguage } = useChangeLanguage();
  return (
    <div
      className={'cursor-pointer flex items-center gap-1 text-sm'}
      onClick={() => switchLanguage(locale === 'en' ? 'ko' : 'en')}
    >
      <IoGlobeOutline size={22} />
      <span className={'lg:block hidden'}>{locale === 'en' ? 'ENG' : 'KOR'}</span>
    </div>
  );
};

export default SwitchLanguageButton;

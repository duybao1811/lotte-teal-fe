import React from 'react';
import Logo from '@/assets/logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ROUTES } from '@/constants';
import { FiChevronRight } from 'react-icons/fi';

const Footer = () => {
  const t = useTranslations('footer');
  return (
    <footer className="bg-foreground">
      <div className="max-w-content w-full py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-white flex flex-col lg:flex-row lg:justify-between gap-6">
        {/* Logo + Text */}
        <div className="flex flex-col sm:flex-row sm:gap-10 lg:gap-20">
          <Link href="/" className="mb-6 sm:mb-0 sm:block hidden">
            <Image src={Logo.src} alt="Logo" width={270} height={40} />
          </Link>

          <div>
            {/* Links */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-10 mb-6 text-base sm:text-lg font-medium">
              <Link href="/">{t('site_map')}</Link>
              <div className="h-3 w-[0.5px] bg-white" />
              <Link href="/">{t('privacy_policy')}</Link>
              <div className="h-3 w-[0.5px] bg-white" />
              <Link href="/">{t('cookie_policy')}</Link>
            </div>

            <Link href="/" className="block sm:hidden mb-6">
              <Image src={Logo.src} alt="Logo" width={270} height={40} />
            </Link>

            {/* Address */}
            <p className="mb-2 text-gray2 text-sm sm:text-base font-bold">
              104, Beotkkot-ro, Geumcheon-gu, Seoul, Republic of Korea
            </p>
            <p className="text-gray2 text-sm sm:text-base font-bold">
              Copyright © LOTTE BIOLOGICS. All rights reserved.
            </p>
          </div>
        </div>

        {/* Family Site Button */}
        <Link
          href={ROUTES['family-site']}
          className="w-full sm:w-60 h-fit px-6 py-3.5 border border-white rounded-full flex items-center justify-between font-bold"
        >
          {t('family_site')}
          <FiChevronRight size={20} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

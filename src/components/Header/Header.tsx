'use client';
import React, { useEffect, useRef, useState } from 'react';
import Logo from '@/assets/logo.svg';
import Image from 'next/image';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { IoSearch } from 'react-icons/io5';
import { MdMailOutline } from 'react-icons/md';
import { Link } from '@/i18n/navigation';
import dynamic from 'next/dynamic';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { HiOutlineMenu } from 'react-icons/hi';
import SwitchLanguageButton from '@/components/Header/components/SwitchLanguageButton';

const DrawerSubmenu = dynamic(() => import('@/components/Header/components/DrawerSubmenu'), {
  ssr: false,
});
const HeaderSubmenu = dynamic(() => import('@/components/Header/components/HeaderSubmenu'), {
  ssr: false,
});
const Backdrop = dynamic(() => import('@/components/Backdrop/Backdrop'), {
  ssr: false,
});

const headerVariants = {
  inactive: { backgroundColor: 'rgba(255,255,255,0)', boxShadow: 'none', color: 'white' },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
    boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
    transition: { duration: 0 },
    color: '#111',
  },
};

export const data = (t: (key: string) => string): IMenuItem[] => [
  {
    title: t('about_us'),
    subMenu: [
      { title: '기업개요' },
      { title: '기업정보' },
      { title: '브랜드&인증' },
      { title: '사업장 안내' },
    ],
  },
  {
    title: t('business_areas'),
    subMenu: [
      { title: '알미늄박' },
      { title: '인쇄·포장' },
      { title: 'CAN' },
      { title: '골판지' },
      { title: '생활용품' },
      { title: '신규사업' },
      { title: '연구분야 소개' },
    ],
  },
  {
    title: t('sustainability_management'),
    subMenu: [
      { title: '환경경영' },
      { title: '안전·품질경영' },
      { title: '윤리·준법경영' },
      { title: '사회공헌 & 동반성장' },
    ],
  },
  {
    title: t('media_center'),
    subMenu: [
      { title: '뉴스룸' },
      { title: '산업기술 소식' },
      { title: '스토리 & 브랜드' },
      { title: '미디어 라이브러리' },
    ],
  },
  {
    title: t('careers'),
    subMenu: [{ title: '인재상' }, { title: '채용안내' }, { title: '복리후생' }],
  },
  {
    title: t('customer_support'),
    subMenu: [
      { title: '공지사항' },
      { title: '문의하기' },
      { title: '자주 묻는 질문' },
      { title: 'A/S & 제품지원' },
    ],
  },
];

const Header = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [scrolled, setScrolled] = useState(() =>
    typeof window !== 'undefined' ? window.scrollY > 50 : false,
  );
  const [hovered, setHovered] = useState(false);
  const [hoverColumnIndex, setHoverColumnIndex] = useState(-1);
  const [openDrawer, setOpenDrawer] = useState(false);

  const ulRef = useRef<HTMLUListElement | null>(null);
  const [ulRect, setUlRect] = useState({ width: 0, left: 0 });

  const t = useTranslations('header');

  useEffect(() => {
    if (ulRef.current && isDesktop) {
      const rect = ulRef.current.getBoundingClientRect();
      setUlRect({ width: ulRef.current.offsetWidth, left: rect.left });
    }
  }, [isDesktop]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY > 50;
      setScrolled((prev) => (prev !== y ? y : prev));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed z-10 left-0 w-screen"
      variants={headerVariants}
      initial="inactive"
      animate={hovered || scrolled ? 'active' : 'inactive'}
    >
      <Backdrop isOpen={hovered} />
      <div className="relative">
        <div className="lg:px-8 md:px-6 px-4 max-w-container flex items-center justify-between py-4">
          <Link href="/public">
            <Image src={Logo.src} alt="Logo" width={270} height={40} />
          </Link>

          <ul
            ref={ulRef}
            className="flex-1 grid-cols-6 text-center font-medium lg:grid hidden"
            onMouseEnter={() => setHovered(true)}
          >
            {data(t).map((item, index) => (
              <li key={item.title} onMouseEnter={() => setHoverColumnIndex(index)}>
                {item.title}
              </li>
            ))}
          </ul>

          <div className="flex items-center lg:gap-5 gap-3">
            <IoSearch size={24} />
            <MdMailOutline size={24} />
            <SwitchLanguageButton />
            <div onClick={() => setOpenDrawer(true)} className={'lg:hidden block'}>
              <HiOutlineMenu size={24} />
            </div>
          </div>
        </div>

        {!isDesktop ? (
          <DrawerSubmenu open={openDrawer} onClose={() => setOpenDrawer(false)} />
        ) : null}

        {isDesktop ? (
          <HeaderSubmenu
            open={hovered}
            onMouseLeave={() => {
              setHovered(false);
              setHoverColumnIndex(-1);
            }}
            onHoverColumn={setHoverColumnIndex}
            activeIndex={hoverColumnIndex}
            width={ulRect.width}
            left={ulRect.left}
          />
        ) : null}
      </div>
    </motion.header>
  );
};

export default Header;

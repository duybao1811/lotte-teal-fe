'use client';
import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { IoSearch } from 'react-icons/io5';
import { MdMailOutline } from 'react-icons/md';
import { HiOutlineMenu } from 'react-icons/hi';
import dynamic from 'next/dynamic';
import { Link } from '@/i18n/navigation';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import SwitchLanguageButton from '@/components/Header/components/SwitchLanguageButton';
import Logo from '@/assets/logo.svg';

const DrawerSubmenu = dynamic(() => import('@/components/Header/components/DrawerSubmenu'), {
    ssr: false,
});
const HeaderSubmenu = dynamic(() => import('@/components/Header/components/HeaderSubmenu'), {
    ssr: false,
});
const Backdrop = dynamic(() => import('@/components/Backdrop/Backdrop'), { ssr: false });

interface IMenuItem {
    title: string;
    href?: string;
    subMenu?: IMenuItem[];
}

const headerVariants = {
    inactive: { backgroundColor: 'rgba(255,255,255,0)', boxShadow: 'none', color: 'white' },
    active: {
        backgroundColor: 'rgba(255,255,255,1)',
        boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
        color: '#111',
        transition: { duration: 0 },
    },
};

export const getMenuData = (t: (key: string) => string): IMenuItem[] => [
    {
        title: t('about_us'),
        subMenu: [
            {
                title: '기업 개요',
                href: '/about',
                subMenu: [
                    { title: 'Overview' },
                    { title: '시러큐스 사이트(USA)' },
                    { title: '송도 사이트 (KOR)' },
                ],
            },
            {
                title: '기업 정보',
                href: '/company',
                subMenu: [
                    { title: '연혁', href: '/company/history' },
                    { title: '재무정보', href: '/company/financial_info' },
                    { title: '이사회 운영현황', href: '/company/board' },
                ],
            },
            {
                title: '브랜드 & 인증&인증',
                href: '/',
                subMenu: [{ title: 'CI' }, { title: '인증현황' }],
            },
            {
                title: '사업장 안내',
                href: '/factory',
                subMenu: [{ title: '공장 소개', href: '/factory' }],
            },
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
            { title: '산업·기술 소식' },
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
    const t = useTranslations('header');

    const [scrolled, setScrolled] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [hoverColumnIndex, setHoverColumnIndex] = useState(-1);
    const [openDrawer, setOpenDrawer] = useState(false);

    const ulRef = useRef<HTMLUListElement>(null);
    const [ulRect, setUlRect] = useState({ width: 0, left: 0 });

    const menuItems = useMemo(() => getMenuData(t), [t]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (ulRef.current && isDesktop) {
            const rect = ulRef.current.getBoundingClientRect();
            setUlRect({ width: rect.width, left: rect.left });
        }
    }, [isDesktop]);

    const handleMouseLeave = useCallback(() => {
        setHovered(false);
        setHoverColumnIndex(-1);
    }, []);

    const onClose = useCallback(() => {
        setHovered(false);
        setHoverColumnIndex(-1);
    }, []);

    return (
        <motion.header
            className="fixed z-10 left-0 top-0 w-screen"
            variants={headerVariants}
            initial="inactive"
            animate={hovered || scrolled ? 'active' : 'inactive'}
        >
            <Backdrop isOpen={hovered} />
            <div className="relative">
                <div className="max-w-container flex items-center justify-between py-4 lg:px-8 md:px-6 px-4 gap-4">
                    <Link href="/">
                        <Image src={Logo.src} alt="Logo" width={270} height={40} />
                    </Link>

                    {isDesktop && (
                        <ul
                            ref={ulRef}
                            className="flex-1 grid-cols-6 font-medium lg:grid hidden ml-20"
                            onMouseEnter={() => setHovered(true)}
                        >
                            {menuItems.map((item, index) => (
                                <li
                                    key={item.title}
                                    className="pl-6 cursor-pointer hover:text-primary transition-colors"
                                    onMouseEnter={() => setHoverColumnIndex(index)}
                                >
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="flex items-center lg:gap-5 gap-3">
                        <IoSearch size={24} />
                        <MdMailOutline size={24} />
                        <SwitchLanguageButton />
                        {!isDesktop && (
                            <button type="button" onClick={() => setOpenDrawer(true)}>
                                <HiOutlineMenu size={24} />
                            </button>
                        )}
                    </div>
                </div>

                {!isDesktop && <DrawerSubmenu open={openDrawer} onClose={() => setOpenDrawer(false)} />}

                {isDesktop && (
                    <HeaderSubmenu
                        onClose={onClose}
                        open={hovered}
                        onMouseLeave={handleMouseLeave}
                        onHoverColumn={setHoverColumnIndex}
                        activeIndex={hoverColumnIndex}
                        width={ulRect.width}
                        left={ulRect.left}
                    />
                )}
            </div>
        </motion.header>
    );
};

export default Header;
'use client';
import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { IoSearch } from 'react-icons/io5';
import { MdMailOutline } from 'react-icons/md';
import { HiOutlineMenu } from 'react-icons/hi';
import dynamic from 'next/dynamic';
import { Link } from '@/i18n/navigation';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import SwitchLanguageButton from '@/components/Header/components/SwitchLanguageButton';
import Logo from '@/assets/logo.svg';

const DrawerSubmenu = dynamic(() => import('@/components/Header/components/DrawerSubmenu'), {
    ssr: false,
});
const HeaderSubmenu = dynamic(() => import('@/components/Header/components/HeaderSubmenu'), {
    ssr: false,
});
const Backdrop = dynamic(() => import('@/components/Backdrop/Backdrop'), { ssr: false });

interface IMenuItem {
    title: string;
    href?: string;
    subMenu?: IMenuItem[];
}

const headerVariants = {
    inactive: { backgroundColor: 'rgba(255,255,255,0)', boxShadow: 'none', color: 'white' },
    active: {
        backgroundColor: 'rgba(255,255,255,1)',
        boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
        color: '#111',
        transition: { duration: 0 },
    },
};

export const getMenuData = (t: (key: string) => string): IMenuItem[] => [
    {
        title: t('about_us'),
        subMenu: [
            {
                title: '기업 개요',
                href: '/about',
                subMenu: [
                    { title: 'Overview' },
                    { title: '시러큐스 사이트(USA)' },
                    { title: '송도 사이트 (KOR)' },
                ],
            },
            {
                title: '기업 정보',
                href: '/company',
                subMenu: [
                    { title: '연혁', href: '/company/history' },
                    { title: '재무정보', href: '/company/financial_info' },
                    { title: '이사회 운영현황', href: '/company/board' },
                ],
            },
            {
                title: '브랜드 & 인증&인증',
                href: '/',
                subMenu: [{ title: 'CI' }, { title: '인증현황' }],
            },
            {
                title: '사업장 안내',
                href: '/factory',
                subMenu: [{ title: '공장 소개', href: '/factory' }],
            },
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
            { title: '산업·기술 소식' },
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
    const t = useTranslations('header');

    const [scrolled, setScrolled] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [hoverColumnIndex, setHoverColumnIndex] = useState(-1);
    const [openDrawer, setOpenDrawer] = useState(false);

    const ulRef = useRef<HTMLUListElement>(null);
    const [ulRect, setUlRect] = useState({ width: 0, left: 0 });

    const menuItems = useMemo(() => getMenuData(t), [t]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (ulRef.current && isDesktop) {
            const rect = ulRef.current.getBoundingClientRect();
            setUlRect({ width: rect.width, left: rect.left });
        }
    }, [isDesktop]);

    const handleMouseLeave = useCallback(() => {
        setHovered(false);
        setHoverColumnIndex(-1);
    }, []);

    const onClose = useCallback(() => {
        setHovered(false);
        setHoverColumnIndex(-1);
    }, []);

    return (
        <motion.header
            className="fixed z-10 left-0 top-0 w-screen"
            variants={headerVariants}
            initial="inactive"
            animate={hovered || scrolled ? 'active' : 'inactive'}
        >
            <Backdrop isOpen={hovered} />
            <div className="relative">
                <div className="max-w-container flex items-center justify-between py-4 lg:px-8 md:px-6 px-4 gap-4">
                    <Link href="/">
                        <Image src={Logo.src} alt="Logo" width={270} height={40} />
                    </Link>

                    {isDesktop && (
                        <ul
                            ref={ulRef}
                            className="flex-1 grid-cols-6 font-medium lg:grid hidden ml-20"
                            onMouseEnter={() => setHovered(true)}
                        >
                            {menuItems.map((item, index) => (
                                <li
                                    key={item.title}
                                    className="pl-6 cursor-pointer hover:text-primary transition-colors"
                                    onMouseEnter={() => setHoverColumnIndex(index)}
                                >
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="flex items-center lg:gap-5 gap-3">
                        <IoSearch size={24} />
                        <MdMailOutline size={24} />
                        <SwitchLanguageButton />
                        {!isDesktop && (
                            <button type="button" onClick={() => setOpenDrawer(true)}>
                                <HiOutlineMenu size={24} />
                            </button>
                        )}
                    </div>
                </div>

                {!isDesktop && <DrawerSubmenu open={openDrawer} onClose={() => setOpenDrawer(false)} />}

                {isDesktop && (
                    <HeaderSubmenu
                        onClose={onClose}
                        open={hovered}
                        onMouseLeave={handleMouseLeave}
                        onHoverColumn={setHoverColumnIndex}
                        activeIndex={hoverColumnIndex}
                        width={ulRect.width}
                        left={ulRect.left}
                    />
                )}
            </div>
        </motion.header>
    );
};

export default Header;

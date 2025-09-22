import React from 'react';
import DropdownModal from '@/components/DropdownModal/DropdownModal';
import SitemapColumn from '@/views/SiteMapView/components/SitemapColumn';

interface Props {
  open: boolean;
  onClose: () => void;
}

const menuData = [
  [
    {
      title: '회사소개',
      items: [
        {
          title: '기업 개요',
          subItems: [
            {
              label: '기업소개',
              href: '/',
            },
            {
              label: 'CEO 인사말',
              href: '/',
            },
            {
              label: '비전',
              href: '/',
            },
          ],
        },
        {
          title: '기업 정보',
          subItems: [
            {
              label: '연혁',
              href: '/',
            },
            {
              label: '재무정보',
              href: '/',
            },
            {
              label: '이사회 운영현황',
              href: '/',
            },
          ],
        },
        {
          title: '브랜드 & 인증',
          subItems: [
            {
              label: 'CI',
              href: '/',
            },
            {
              label: '인증현황',
              href: '/',
            },
          ],
        },
        {
          title: '사업장 안내',
          subItems: [
            {
              label: '공장 소개',
              href: '/',
            },
          ],
        },
      ],
    },
  ],
  [
    {
      title: '사업영역',
      items: [
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
      title: '지속가능경영',
      items: [
        { title: '환경경영' },
        { title: '안전·품질경영' },
        { title: '윤리·준법경영' },
        { title: '사회공헌 & 동반성장' },
      ],
    },
  ],
  [
    {
      title: '미디어 센터',
      items: [
        { title: '뉴스룸' },
        { title: '산업·기술 소식' },
        { title: '스토리 & 브랜드' },
        { title: '미디어 라이브러리' },
      ],
    },
    {
      title: '인재채용',
      items: [{ title: '인재상' }, { title: '채용안내' }, { title: '복리후생' }],
    },
    {
      title: '고객지원',
      items: [
        { title: '공지사항' },
        { title: '문의하기' },
        { title: '자주 묻는 질문' },
        { title: 'A/S & 제품지원' },
      ],
    },
  ],
];

const SiteMapView = ({ open, onClose }: Props) => {
  return (
    <DropdownModal onClose={onClose} open={open}>
      <div className={'max-w-content md:pb-30 pb-20 pt-12'}>
        <div className={'pb-12 border-b border-text-primary'}>
          <h4 className={'font-extrabold text-4.5xl text-center'}>Site Map</h4>
        </div>
        <div className={'grid-cols-3 pt-10 sm:grid hidden'}>
          {menuData.map((col, index) => (
            <div key={`col-${index}`} className={'flex flex-col gap-8'}>
              {col.map((item) => (
                <SitemapColumn key={item.title} title={item.title} items={item.items} />
              ))}
            </div>
          ))}
        </div>
        <div className={'sm:hidden grid grid-cols-2 gap-y-20 pt-10'}>
          {menuData.flat().map((item) => (
            <SitemapColumn key={item.title} title={item.title} items={item.items} />
          ))}
        </div>
      </div>
    </DropdownModal>
  );
};

export default SiteMapView;

import React from 'react';

interface Props {
  title: string;
  items: { title: string; href?: string; subItems?: { label: string; href: string }[] }[];
}

const SitemapColumn = ({ title, items }: Props) => {
  return (
    <div>
      <div className={'flex items-center gap-2 mb-5 font-bold text-lg'}>
        <div className={'w-2 h-2 rounded-full bg-primary'} />
        {title}
      </div>
      <div className={'flex flex-col gap-4 pl-4'}>
        {items?.map((item) => (
          <div key={item.title} className={'flex flex-col gap-4'}>
            <p className={'font-medium text-lg text-[#333333]'}>{item.title}</p>
            {item?.subItems?.length ? (
              <div className={'flex flex-col gap-3 pl-3'}>
                {item?.subItems?.map((subItem) => (
                  <p className={'font-medium text-base text-text-secondary'} key={subItem.label}>
                    - {subItem.label}
                  </p>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SitemapColumn;

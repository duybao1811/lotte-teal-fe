import clsx from 'clsx';
import React from 'react';
import { Link } from '@/i18n/navigation';

const DropdownColumn = ({
  item,
  index,
  activeIndex,
  onHover,
  onClose,
}: {
  item: IMenuItem;
  index: number;
  activeIndex: number;
  onHover: (i: number) => void;
  onClose: () => void;
}) => (
  <ul
    className={clsx(
      'border-r border-stroke pb-20 pt-6 px-6 transition-all duration-300 space-y-6',
      {
        'bg-gray4': index === activeIndex,
      },
    )}
    onMouseEnter={() => onHover(index)}
  >
    {item?.subMenu?.map((subItem) => (
      <div key={subItem.title}>
        <Link
          href={subItem.href || '/'}
          className="text-base font-bold hover:underline"
          onClick={onClose}
        >
          {subItem.title}
        </Link>
        <ul className={'space-y-4 mt-4'}>
          {subItem?.subMenu?.map((subSubItem) => (
            <li key={subSubItem.title}>
              <Link
                onClick={onClose}
                href={subSubItem.href || '/'}
                className="font-medium text-sm text-gray  cursor-pointer hover:underline"
              >
                {subSubItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </ul>
);

export default DropdownColumn;

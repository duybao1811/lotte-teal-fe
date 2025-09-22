import clsx from 'clsx';
import React from 'react';

const DropdownColumn = ({
  item,
  index,
  activeIndex,
  onHover,
}: {
  item: { title: string; subMenu: { title: string }[] };
  index: number;
  activeIndex: number;
  onHover: (i: number) => void;
}) => (
  <ul
    className={clsx('border-r border-stroke pb-10 pt-4 transition-all duration-300', {
      'bg-[#f5f5f5]': index === activeIndex,
    })}
    onMouseEnter={() => onHover(index)}
  >
    {item.subMenu.map((subItem) => (
      <li key={subItem.title} className="py-3 text-base">
        {subItem.title}
      </li>
    ))}
  </ul>
);

export default DropdownColumn;

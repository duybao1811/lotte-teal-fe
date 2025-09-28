import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

interface PolicyCardProps {
  item: {
    title: string;
    icon: string;
    width: number;
    height: number;
    content: string[];
  };
  className?: string;
}

const PolicyCard = ({ item, className }: PolicyCardProps) => {
  return (
    <article
      className={clsx(
        'flex items-start gap-8 w-full px-10 md:py-0 py-14 md:border-0 border md:rounded-none rounded-2xl border-text-secondary',
        'border-gray3',
        className,
      )}
    >
      <div className="flex items-center justify-center md:min-w-[134px] md:min-h-[134px] min-w-[40px] min-h-[40px] md:bg-gray4 md:rounded-full">
        <Image src={item.icon} width={item.width} height={item.height} alt={`${item.title} icon`} />
      </div>

      <div>
        <h3 className="font-extrabold text-2xl mb-3">{item.title}</h3>

        <ul className="space-y-2">
          {item.content.map((line, i) => (
            <li key={i} className="flex gap-2 items-start">
              <span className="w-1 h-1 min-w-1 min-h-1 bg-primary rounded-full mt-2" />
              <p className="font-medium text-base">{line}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default PolicyCard;

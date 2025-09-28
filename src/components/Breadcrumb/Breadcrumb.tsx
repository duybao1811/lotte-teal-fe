import { Link } from '@/i18n/navigation';
import { FiHome } from 'react-icons/fi';
import { HiChevronRight, HiChevronDown } from 'react-icons/hi';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center text-base font-medium text-gray">
        <li>
          <Link href={'/'} className={'flex items-center'}>
            <FiHome width={20} height={20} className={'md:block hidden'} />
            <div
              className={
                'md:min-w-[160px] md:pl-5 md:pr-2.5 flex items-center md:gap-0 gap-1 justify-between'
              }
            >
              Home
              <HiChevronDown size={16} className={'md:block hidden'} />
              <HiChevronRight size={16} className={'md:hidden block'} />
            </div>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index}>
              {item.href ? (
                <Link
                  href={item.href || '/'}
                  className={
                    'md:min-w-[160px] md:pl-5 md:pr-2.5 flex items-center md:gap-0 gap-1 justify-between'
                  }
                >
                  {item.label}
                  <HiChevronDown size={16} className={'md:block hidden'} />
                  {isLast ? null : <HiChevronRight size={16} className={'md:hidden block'} />}
                </Link>
              ) : (
                <div
                  className={
                    'md:min-w-[160px] md:pl-5 md:pr-2.5 flex items-center md:gap-0 gap-1 justify-between'
                  }
                >
                  {item.label}
                  <HiChevronDown size={16} className={'md:block hidden'} />
                  {isLast ? null : <HiChevronRight size={16} className={'md:hidden block'} />}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

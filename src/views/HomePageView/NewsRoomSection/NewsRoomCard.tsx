import Image from 'next/image';
import { Link } from '@/i18n/navigation';

interface NewsCardProps {
  imageSrc: string;
  category: string;
  date: string;
  title: string;
  bodyText: string;
}

const NewsCard = ({ imageSrc, category, date, title, bodyText }: NewsCardProps) => {
  return (
    <Link
      href={'/'}
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      }}
      className="snap-center bg-white rounded-xl overflow-hidden flex-1 min-w-[280px] hover:-translate-y-8 transition-all duration-300"
    >
      <div className="relative w-full h-72">
        <Image src={imageSrc} alt={title} fill objectFit="cover" />
      </div>

      <div className="px-6 pt-6 pb-8">
        <div className="flex items-center text-lg text-gray mb-4">
          <span>{category}</span>
          <span className="mx-2 text-base">|</span>
          <span>{date}</span>
        </div>

        <h6 className="text-0.5xl font-extrabold mb-4 line-clamp-2 min-h-14">{title}</h6>

        <p className="line-clamp-3 font-medium text-lg">{bodyText}</p>
      </div>
    </Link>
  );
};

export default NewsCard;

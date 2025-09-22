import React from 'react';
import Image from 'next/image';

interface Props {
  title: string;
  description: string;
  image: string;
  priority?: boolean;
}

const BannerItem = ({ title, description, image, priority }: Props) => {
  return (
    <div className="relative w-full h-full flex flex-col md:justify-center justify-start text-white md:px-40 px-6 md:gap-10 gap-6 md:py-0 py-56">
      <Image
        priority={priority}
        src={image}
        alt="Banner"
        fill
        className="absolute inset-0 -z-10 object-cover"
      />
      <h1 className="text-6xl font-extrabold">{title}</h1>
      <p className="whitespace-pre-line text-3xl">{description}</p>
    </div>
  );
};

export default BannerItem;

import Image from 'next/image';

interface CoreValueCardProps {
  title: string;
  content: string;
  image: string;
}

const CoreValueCard = ({ title, content, image }: CoreValueCardProps) => {
  return (
    <div className="relative rounded-2xl overflow-hidden h-[35rem] min-w-[22rem] md:flex-1 px-10 py-14 flex flex-col justify-end text-white snap-center">
      <Image
        src={image}
        alt={`Core value: ${title}`}
        fill
        priority
        className="absolute inset-0 object-cover -z-10"
      />

      <h3 className="mb-7 font-extrabold text-2xl uppercase">{title}</h3>
      <p className="whitespace-pre-line font-medium text-base">{content}</p>
    </div>
  );
};

export default CoreValueCard;

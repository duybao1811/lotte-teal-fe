import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

interface Props {
  title: string;
  description: string;
  image: string;
  active?: boolean;
  disableScaleAnimation?: boolean;
}

const BusinessSectionCard = ({
  title,
  description,
  image,
  active,
  disableScaleAnimation,
}: Props) => {
  return (
    <Link href={'/'}>
      <motion.div
        style={{
          aspectRatio: 350 / 518,
        }}
        className={
          'cursor-pointer flex flex-col justify-between text-white md:min-w-[350px] min-w-[250px] md:w-[350px] w-[45vw] pt-5 px-8 pb-8 rounded-[20px] relative overflow-hidden'
        }
        animate={
          disableScaleAnimation
            ? {
                marginLeft: 0,
                marginRight: 0,
                scale: 1,
              }
            : {
                scale: active ? 1.2 : 1,
                marginLeft: active ? 70 : 35,
                marginRight: active ? 70 : 35,
              }
        }
        initial={false}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        <Image
          src={image}
          alt={`Background image ${title}`}
          fill
          className={'absolute inset-0 -z-1'}
          objectFit={'cover'}
        />
        <AnimatePresence>
          {!active && (
            <motion.h4
              layout
              className={'font-extrabold text-2.5xl'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {title}
            </motion.h4>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && (
            <motion.div
              layout
              className="flex flex-col h-full justify-end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className={'text-3.5xl font-extrabold mb-3.5'}>{title}</p>
              <p className={'text-lg font-medium'}>{description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};

export default React.memo(BusinessSectionCard);

'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';
import { useRef } from 'react';
import { ITimelineEvent } from '@/views/CompanyView/components/CompanyHistory/Timeline';

interface Props {
  event: ITimelineEvent;
  index: number;
}

export default function TimelineEvent({ event, index }: Props) {
  const containerRef = useRef(null);
  const isEven = index % 2 === 0;
  const inView = useInView(containerRef, { once: true, amount: 1 });

  const baseDelay = 0.3;

  const getDelay = (offset = 0) => baseDelay + offset * 0.2;

  const dotPositionClass = isEven
    ? 'md:before:-left-[6.25rem] before:-left-6 before:-translate-x-1/2'
    : 'md:after:-right-[6.25rem] after:-right-6 after:translate-x-1/2';

  const textAlignClass = isEven ? 'text-left' : 'text-right';
  const flexDirectionClass = isEven ? 'flex-row-reverse' : '';

  return (
    <div
      ref={containerRef}
      className={clsx('flex flex-row items-center md:gap-[12.5rem] gap-12', flexDirectionClass)}
    >
      <div className={clsx('w-1/2', textAlignClass)}>
        <motion.h3
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: getDelay(1) }}
          className={clsx(
            'text-56 font-extrabold mb-12 relative',
            isEven
              ? `before:block before:w-3 before:h-3 before:border-[3px] before:bg-background before:border-primary before:rounded-full before:absolute before:top-1/2 before:-translate-y-1/2 ${dotPositionClass}`
              : `after:block after:w-3 after:h-3 after:border-[3px] after:bg-background after:border-primary after:rounded-full after:absolute after:top-1/2 after:-translate-y-1/2 ${dotPositionClass}`,
          )}
        >
          {event.year}
        </motion.h3>

        {event.events.map((text, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: getDelay(2 + idx) }}
            className={clsx(
              'text-base text-black leading-relaxed relative mb-5',
              isEven
                ? `before:block before:w-2 before:h-2 before:bg-text-primary before:rounded-full before:absolute before:top-1/2 before:-translate-y-1/2 ${dotPositionClass}`
                : `after:block after:w-2 after:h-2 after:bg-text-primary after:rounded-full after:absolute after:top-1/2 before:-translate-y-1/2 ${dotPositionClass}`,
            )}
          >
            {text}
          </motion.p>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: getDelay(0) }}
        className={clsx('w-1/2 flex', isEven ? 'justify-end' : 'justify-start')}
      >
        <div className="relative md:w-[360px] md:h-[250px] md:aspect-auto w-full aspect-square rounded-2xl overflow-hidden shadow-lg hover:scale-[1.2] transition-transform duration-500">
          <Image src={event.image} alt={event.year} fill style={{ objectFit: 'cover' }} />
        </div>
      </motion.div>
    </div>
  );
}

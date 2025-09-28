'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, animate } from 'framer-motion';
import BusinessSectionCard from './BusinessSectionCard';

type BusinessCarouselProps = {
  data: { title: string; description: string; image: string }[];
  activeIndex: number;
};

const BusinessCarousel = ({ data, activeIndex }: BusinessCarouselProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [x, setX] = useState(0);

  useEffect(() => {
    if (!wrapperRef.current || !cardRefs.current[activeIndex]) return;

    const containerWidth = wrapperRef.current.offsetWidth;
    const card = cardRefs.current[activeIndex];
    const cardLeft = card.offsetLeft;
    const cardCenter = cardLeft + card.offsetWidth / 2;
    const targetX = containerWidth / 2 - cardCenter;

    animate(x, targetX, {
      type: 'tween',
      ease: 'easeOut',
      duration: 0.8,
      onUpdate: (latest) => setX(latest),
    });
  }, [activeIndex, x]);

  return (
    <div className="relative overflow-hidden py-16 px-10">
      <motion.div ref={wrapperRef} className="flex items-center" style={{ x }}>
        {data.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el!;
            }}
          >
            <BusinessSectionCard
              title={item.title}
              description={item.description}
              image={item.image}
              active={index === activeIndex}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BusinessCarousel;

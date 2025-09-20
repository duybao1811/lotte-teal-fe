'use client';
import React, { useRef, useEffect, useState } from 'react';
import BusinessSectionCard from './BusinessSectionCard';

interface Props {
  data: { title: string; description: string; image: string }[];
  activeIndex: number;
  onChangeIndex: (index: number) => void;
}

const BusinessCarouselScroll = ({ data, activeIndex, onChangeIndex }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const loopCount = 3;
  const extendedData = Array(loopCount).fill(data).flat();
  const dataLength = data.length;
  const [scales, setScales] = useState<number[]>(Array(extendedData.length).fill(1));

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const children = Array.from(container.children) as HTMLElement[];
    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;
    const newScales = Array(extendedData.length).fill(1);

    children.forEach((child, index) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    newScales[closestIndex] = 1.2;
    setScales(newScales);

    const realIndex = closestIndex % dataLength;
    if (realIndex !== activeIndex) {
      onChangeIndex(realIndex);
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const children = Array.from(container.children) as HTMLElement[];
    containerRef.current.scrollLeft = dataLength * children[0].offsetWidth;

    const handleContainerScroll = () => {
      handleScroll();

      const container = containerRef.current;
      if (!container) return;
      const children = Array.from(container.children) as HTMLElement[];

      const firstFakeItemOffset = children[0].offsetLeft;
      const lastFakeItemOffset =
        children[extendedData.length - 1].offsetLeft - container.offsetWidth;

      if (container.scrollLeft <= firstFakeItemOffset) {
        container.scrollLeft += dataLength * children[0].offsetWidth;
      } else if (container.scrollLeft >= lastFakeItemOffset) {
        container.scrollLeft -= dataLength * children[0].offsetWidth;
      }
    };

    containerRef.current.addEventListener('scroll', handleContainerScroll);

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleContainerScroll);
      }
    };
  }, [dataLength, extendedData.length]);

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="flex items-center gap-12 snap-x snap-mandatory snap-always overflow-x-scroll scrollbar-hidden sm:py-16 py-10 px-10"
    >
      {extendedData.map((item, index) => (
        <div
          key={index}
          style={{ transform: `scale(${scales[index]})`, transition: 'transform 0.5s ease-out' }}
          className="snap-center flex-shrink-0"
        >
          <BusinessSectionCard
            {...item}
            active={index % dataLength === activeIndex}
            disableScaleAnimation
          />
        </div>
      ))}
    </div>
  );
};

export default BusinessCarouselScroll;
